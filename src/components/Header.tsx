import React, { CSSProperties } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { CartContext } from './contexts/CartContext';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

function Header() {
    return (
        <CartContext.Consumer>
                {({ cart }) => {
                    return (
                        <div style={headerStyle}>
                            <Typography>
                                <Link style={linkStyle} to="/">
                                    <h1 style={headerItem}>MARSVINSTEMA</h1>
                                </Link>
                            </Typography>
                            <Link style={linkStyle} to="/kundvagn">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={cart.length} color="secondary">
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
    padding: '0 2rem',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const headerItem: CSSProperties = {
    fontSize: '1.75rem',    
    margin: '0',
    padding: '0',
    display: 'flex',
    color: 'white' 
}

const linkStyle: CSSProperties = {
    textDecoration: 'none' 
}

export default Header;