import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Cart from './Cart';
import ProductView from './ProductView';



interface Props {}

interface State {

}
class Layout extends Component<Props, State> {
   
    render() {

        return (
            <div>
                <Route exact path="/">
                    <ProductView/>
                </Route>

                <Route path="/kundvagn" component={Cart}/>
                
            </div>
        )
    }
}
export default Layout;