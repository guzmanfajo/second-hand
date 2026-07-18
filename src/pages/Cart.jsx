import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import CartItem from "../components/ui/CartItem";

function Cart() {
    const { cart, total } = useCart();

    return (
        <main className="mx-auto max-w-7xl px-6 py-12">
            <div className="mb-10 flex items-end justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-(--text-primary)">
                        Shopping Cart
                    </h1>

                    <p className="mt-2 text-(--text-secondary)">
                        {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
                    </p>
                </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
                <section className="flex flex-col gap-6">
                    {cart.length > 0 ? (
                        cart.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                            />
                        ))
                    ) : (
                        <div className="rounded-2xl border border-(--border) bg-(--surface) py-20 text-center">
                            <h2 className="text-2xl font-semibold text-(--text-primary)">
                                Your cart is empty
                            </h2>

                            <p className="mt-3 text-(--text-secondary)">
                                Add some products to start shopping.
                            </p>

                            <Link
                                to="/"
                                className="mt-8 inline-flex rounded-lg bg-(--text-primary) px-6 py-3 text-(--background) transition-opacity hover:opacity-90"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    )}
                </section>

                <aside className="h-fit rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold text-(--text-primary)">
                        Order Summary
                    </h2>

                    <div className="mt-8 space-y-4">
                        <div className="flex justify-between">
                            <span className="text-(--text-secondary)">
                                Subtotal
                            </span>

                            <span className="font-medium text-(--text-primary)">
                                ${total.toFixed(2)}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-(--text-secondary)">
                                Shipping
                            </span>

                            <span className="font-medium text-(--text-primary)">
                                Free
                            </span>
                        </div>
                    </div>

                    <div className="my-6 border-t border-(--border)" />

                    <div className="flex justify-between text-xl font-semibold">
                        <span className="text-(--text-primary)">
                            Total
                        </span>

                        <span className="text-(--text-primary)">
                            ${total.toFixed(2)}
                        </span>
                    </div>

                    <button
                        className="mt-8 w-full rounded-xl bg-(--text-primary) py-3 font-medium text-(--background) transition-opacity hover:opacity-90"
                    >
                        Checkout
                    </button>

                    <Link
                        to="/"
                        className="mt-4 flex justify-center rounded-xl border border-(--border) py-3 font-medium text-(--text-primary) transition-colors hover:bg-stone-100"
                    >
                        Continue Shopping
                    </Link>
                </aside>
            </div>
        </main>
    );
}

export default Cart;