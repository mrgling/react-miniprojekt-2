import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductView from './ProductView';

interface Props {}

interface State {}

class Layout extends Component<Props, State> {
   
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <ProductView />
                </Route>
                <Route path="/kundvagn" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/produkt/:url" component={ProductDetail} />
            </Switch>
        )
    }
}

export default Layout;