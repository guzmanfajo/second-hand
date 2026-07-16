import { use } from "react";
import { useCart } from "../hooks/useCart";
import CartItem from "../components/ui/CartItem";

function Cart() {
    const { cart } = useCart();

    return (
        <main className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12">
            <h1 className="text-4xl font-bold">
                Shopping Cart
            </h1>

            {cart.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                />
            ))}
        </main>
    );
}

export default Cart;