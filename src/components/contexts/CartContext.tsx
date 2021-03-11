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
        cart: [
            {
                name:'Marsvinsrustning', 
                url: 'rustning',
                description: 'Exklusiv handgjord ringbrynja med matchande hjälm. En självklar accessoar till medeltidsveckan!',
                price: 199999,
                img: 'https://i.imgur.com/DRInboh.jpg'
            },
            {
                name: 'Fluffig myskorg',
                url: 'myskorg-fluff',
                description: 'Vem vill inte sjunka ner i en rosa myskorg dekorerad med fluffiga enhörningar?',
                price: 299,
                img: 'https://cdn.shopify.com/s/files/1/1338/9237/products/guineapigwheekly-5_1024x.jpg?v=1602972185'
            },
            {
                name:'Kiwiformad myskorg', 
                url: 'myskorg-kiwi',
                description: 'Stilfull myskorg i mjukaste fleece, formad som en kiwiskiva. FRUKTansvärt fin!',
                price: 399,
                img: 'https://i.etsystatic.com/7165241/r/il/178e41/579811693/il_794xN.579811693_ne72.jpg'
            },
            
        ]
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