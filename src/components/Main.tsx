import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Cart from './Cart';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductView from './ProductView';

interface Props {}

interface State {}

class Layout extends Component<Props, State> {
   
    render() {
        return (
            <div>
                <Route exact path="/">
                    <ProductView />
                </Route>
                <Route path="/kundvagn" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/produkt1" component={ProductDetail} />
            </div>
        )
    }
}

export default Layout;