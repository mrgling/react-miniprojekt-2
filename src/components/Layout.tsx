import React from 'react';
import CartProvider from './contexts/CartContext';
import Header from './Header'
import Main from './Main'

function Layout() {
   
    return (
        <div>
            <CartProvider>
                <Header />
                <Main />
            </CartProvider>
        </div>
    )
}

export default Layout;