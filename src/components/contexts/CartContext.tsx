import { Component, createContext } from 'react';
import { Product } from '../ProductList';

interface State {
    cart: Product[]
}

interface ContextValue extends State {
    addToCart: (product: Product) => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {}
});

class CartProvider extends Component<{}, State> {
    state: State = {
        cart: []
    }

    addProductToCart = (product: Product) => {
        const updatedCart = [...this.state.cart, product];
        this.setState({ cart: updatedCart });
    }

    render() {
        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                addToCart: this.addProductToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartProvider;