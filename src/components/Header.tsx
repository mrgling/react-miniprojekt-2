import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={ headerStyle }>
            <Link to="/">
                <h1 style={ headerItem }>MARSVINSTEMA</h1>
            </Link>
        </div>
    )
}

const headerStyle: CSSProperties = {
    background: 'linear-gradient(0deg, #FFFFFF, #00A3FF)', 
    height: '7rem',
    display: 'flex',
    padding: '0 1rem',
    alignItems: 'center',
    justifyContent: 'center'
}

const headerItem: CSSProperties = {
    fontSize: '2rem',    
    margin: '0',
    padding: '0',
    display: 'flex',
    color: 'white'
}


export default Header;