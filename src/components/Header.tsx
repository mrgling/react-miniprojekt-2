import React, { CSSProperties } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, Typography } from '@material-ui/core';
import { CartContext, CartProduct } from './contexts/CartContext';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

const fonttheme = createMuiTheme();

fonttheme.typography.h1 = {
  fontSize: '2rem',
  [fonttheme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
  },
  [fonttheme.breakpoints.up('md')]: {
    fontSize: '3.75rem',
  },
};

function Header() { 

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
                        <ThemeProvider theme={fonttheme}>
                            <Typography variant="h1">
                                <Link style={linkStyle} to="/">
                                    MARSVINSTEMA
                                </Link>
                            </Typography>
                        </ThemeProvider>
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