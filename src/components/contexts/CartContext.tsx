import { Component, createContext } from 'react';
import { Product } from '../../ProductList';

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

function getCart() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart) as CartProduct[];
    }
    return [];
  }
class CartProvider extends Component<{}, State> {
    state: State = {
        cart: getCart()
    }

    addProductToCart = (product: Product) => {
        const cartItem = this.state.cart.find( item=> item.url === product.url)
        if (cartItem) {
            cartItem.quantity ++;
            this.setState({ cart: this.state.cart });
            this.updateCartInLocalStorage(this.state.cart)

        } else {
            const updatedCart = [...this.state.cart, {...product, quantity: 1}];
            this.setState({ cart: updatedCart });  
            this.updateCartInLocalStorage(updatedCart)                 
        }
    }

    removeProductFromCart = (product: Product) => {
        const updatedCart = this.state.cart.filter(item => item.url !== product.url);
        this.setState({ cart: updatedCart });
        this.updateCartInLocalStorage(updatedCart)
    }

    increaseQuantity = (product: string) => {
        const cartItem = this.state.cart.find( item=> item.url === product);
        if (cartItem) {
            cartItem.quantity ++;
            this.setState({ cart: this.state.cart }); 
            this.updateCartInLocalStorage(this.state.cart)
        } 
    }

    decreaseQuantity = (product: string) => {
        const cartItem = this.state.cart.find( item=> item.url === product);
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity --;
            this.setState({ cart: this.state.cart }); 
            this.updateCartInLocalStorage(this.state.cart)
        } else {
            const updatedCart = this.state.cart.filter(item => item.url !== product);
            this.setState({ cart: updatedCart });
            this.updateCartInLocalStorage(updatedCart);
        } 
    }

    emptyCart = () => {
        this.setState({ cart: [] });
        localStorage.removeItem('cart');
    }

    updateCartInLocalStorage(cart: CartProduct[]) {
        localStorage.setItem('cart', JSON.stringify(cart))
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