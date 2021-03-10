import React, { CSSProperties } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

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
        <div style={headerStyle}>
            <Link style={linkStyle} to="/">
                <h1 style={headerItem}>MARSVINSTEMA</h1>
            </Link>
            <Link style={linkStyle} to="/kundvagn">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </Link>
        </div>
    )
}

const headerStyle: CSSProperties = {
    background: 'linear-gradient(0deg, #FAFAFA, #00A3FF)', 
    height: '7rem',
    display: 'flex',
    padding: '0 2rem',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const headerItem: CSSProperties = {
    fontSize: '1.5rem',    
    margin: '0',
    padding: '0',
    display: 'flex',
    color: 'white' 
}

const linkStyle: CSSProperties = {
    textDecoration: 'none' 
}

export default Header;