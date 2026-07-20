import { createContext, useEffect, useState } from "react";
import { useToast } from "./ToastContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const { showToast } = useToast();

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            return JSON.parse(savedCart);
        }

        return [];
    });

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

        showToast(
            "Added to cart",
            product.name
        );
    }

    function updateQuantity(id, amount) {
        const product = cart.find(item => item.id === id);

        if (amount === -1 && product.quantity === 1) {
            removeFromCart(id);
            return;
        }

        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + amount,
                };
            }

            return item;
        });

        setCart(updatedCart);
    }

    function removeFromCart(id) {
        const updatedCart = cart.filter(item => item.id !== id);

        setCart(updatedCart);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    return (
        <CartContext.Provider
            value={{ 
                cart,
                total,
                addToCart,
                updateQuantity,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );

}