import { Component, createContext } from 'react';
import { Product } from '../ProductList';

interface State {
    cart: CartProduct[]
}

interface CartProduct extends Product {
    quantity: number;
}

interface ContextValue extends State {
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    emptyCart: () => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    emptyCart: () => {}
});

class CartProvider extends Component<{}, State> {
    state: State = {
        cart: []
    }

    addProductToCart = (product: Product) => {
        const cartItem = this.state.cart.find( item=> item.url === product.url)
        if (cartItem) {
            cartItem.quantity ++;
            let updatedCart = this.state.cart.filter(item => item.url !== product.url);
            updatedCart = [...updatedCart, cartItem];
            this.setState({ cart: updatedCart }); 
            
        } else {
            const updatedCart = [...this.state.cart, {...product, quantity: 1}];
            this.setState({ cart: updatedCart });          
        }
        console.log(this.state.cart)

    }

    removeProductFromCart = (product: Product) => {
        const updatedCart = this.state.cart.filter(item => item.url !== product.url);
        this.setState({ cart: updatedCart });
    }

    emptyCart = () => {
        this.setState({ cart: [] });
    }

    render() {
        return (
            <CartContext.Provider value={{
                cart: this.state.cart,
                addToCart: this.addProductToCart,
                removeFromCart: this.removeProductFromCart,
                emptyCart: this.emptyCart

            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartProvider;