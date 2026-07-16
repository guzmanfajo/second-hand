import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        const existingProduct = cart.find(
            item => item.id === product.id
        );

        if (existingProduct) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }

                return item;
            });

            setCart(updatedCart);
    
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    }

    function updateQuantity(id, amount) {

    }

    return (
        <CartContext.Provider
            value={{ 
                cart,
                addToCart,
                updateQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );

}