import { Component, createContext } from 'react';
import { Product } from '../ProductList';

interface State {
    cart: CartProduct[]
}

export interface CartProduct extends Product {
    quantity: number;
}

interface ContextValue extends State {
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    increaseQuantity: (product: string) => void;
    decreaseQuantity: (product: string) => void;
    emptyCart: () => void;
}

export const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
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
            this.setState({ cart: this.state.cart });
            //let updatedCart = this.state.cart.filter(item => item.url !== product.url);
            //updatedCart = [...updatedCart, cartItem];
            //this.setState({ cart: updatedCart }); 

        } else {
            const updatedCart = [...this.state.cart, {...product, quantity: 1}];
            this.setState({ cart: updatedCart });                   
        }
    }

    removeProductFromCart = (product: Product) => {
        const updatedCart = this.state.cart.filter(item => item.url !== product.url);
        this.setState({ cart: updatedCart });
    }

    increaseQuantity = (product: string) => {
        const cartItem = this.state.cart.find( item=> item.url === product);
        if (cartItem) {
            cartItem.quantity ++;
            this.setState({ cart: this.state.cart }); 
          //  let updatedCart = this.state.cart.filter(item => item.url !== product);
           // updatedCart = [...updatedCart, cartItem];
           // this.setState({ cart: updatedCart }); 
        } 
    }

    decreaseQuantity = (product: string) => {
        const cartItem = this.state.cart.find( item=> item.url === product);
        if (cartItem) {
            cartItem.quantity --;
            this.setState({ cart: this.state.cart }); 
          //  let updatedCart = this.state.cart.filter(item => item.url !== product);
           // updatedCart = [...updatedCart, cartItem];
           // this.setState({ cart: updatedCart }); 
        } 
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
                increaseQuantity: this.increaseQuantity,
                decreaseQuantity: this.decreaseQuantity,
                emptyCart: this.emptyCart

            }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartProvider;