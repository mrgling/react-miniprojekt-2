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
                <Route path="/rustning" component={ProductDetail} />
                <Route path="/myskorg-fluff" component={ProductDetail} />
                <Route path="/tomteluva" component={ProductDetail} />
                <Route path="/myskorg-kiwi" component={ProductDetail} />
                <Route path="/korv" component={ProductDetail} />
                <Route path="/tunnel" component={ProductDetail} />

            </div>
        )
    }
}

export default Layout;