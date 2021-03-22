import React, { CSSProperties } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { CartContext, CartProduct } from './contexts/CartContext';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '3.75rem',
      },
    },
  }),
);

function Header() { 

    const classes = useStyles();

    return (
        <CartContext.Consumer>
            {({ cart }) => {

                const getCartLength = (cartCount: CartProduct[]) => {
                    let length = 0;
                    cartCount.forEach((CartProduct) => {
                        length += CartProduct.quantity
                    })
                    return length;                    
                }
                
                let cartLength = getCartLength(cart)

                return (
                    <div style={headerStyle}>
                        <div className={classes.root}>
                            <Typography variant="h1">
                                <Link style={linkStyle} to="/">
                                    MARSVINSTEMA
                                </Link>
                            </Typography>
                        </div>
                        <Link style={linkStyle} to="/kundvagn">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={cartLength} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                    </div>
                )
            }}
        </CartContext.Consumer>        
    )
}

const headerStyle: CSSProperties = {
    background: 'linear-gradient(90deg, rgba(7,0,129,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    height: '7rem',
    display: 'flex',
    padding: '0 1rem',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const linkStyle: CSSProperties = {
     textDecoration: 'none',
     color: 'white',
     fontFamily: 'Changa One'
}

export default Header;