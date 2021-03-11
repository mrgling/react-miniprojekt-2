import React, { Component } from 'react';
import CartProvider from './contexts/CartContext';
import Header from './Header'
import Main from './Main'

interface Props {}

interface State {}

class Layout extends Component<Props, State> {
   
    render() {
        return (
            <div>
                <CartProvider>
                    <Header />
                    <Main />
                </CartProvider>
            </div>
        )
    }
}

export default Layout;