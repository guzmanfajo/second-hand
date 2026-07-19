import { Trash2 } from "lucide-react";
import { useCart } from "../../hooks/useCart";

function CartItem({ item }) {
    const { updateQuantity, removeFromCart } = useCart();

    return (
        <article 
            className="
                flex
                flex-col
                gap-6
                rounded-2xl
                border
                border-(--border)
                bg-(--surface)
                p-6
                shadow-sm
                transition-shadow
                hover:shadow-md
                sm:flex-row
            "
        >
            <img
                src={item.image}
                alt={item.name}
                className="
                    mx-auto
                    aspect-4/5
                    w-44
                    rounded-xl
                    object-cover
                    sm:mx-0
                    sm:h-36
                    sm:w-28
                "
            />

            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <h2 className="text-center text-xl sm:text-left font-semibold text-(--text-primary)">
                        {item.name}
                    </h2>

                    <p className="text-center sm:text-left mt-2 text-sm text-(--text-secondary)">
                        Size: {item.size}
                    </p>

                    <div className="text-center sm:text-left mt-4">
                        <p className="text-xs uppercase tracking-wider text-(--text-secondary)">
                            Price
                        </p>

                        <p className="mt-1 text-lg font-medium text-(--text-primary)">
                            ${item.price.toFixed(2)}
                        </p>
                    </div>
                </div>

                <div className="mt-6 border-t border-(--border) pt-6">
                    <div 
                        className="
                            flex
                            flex-col
                            gap-6
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <div className="flex items-center justify-center gap-3 sm:justify-start">
                            <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) transition hover:bg-stone-100"
                            >
                                -
                            </button>

                            <span className="min-w-8 text-center text-lg font-semibold">
                                {item.quantity}
                            </span>
                            
                            <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) transition hover:bg-stone-100"
                            >
                                +
                            </button>
                        </div>

                        <div className="text-center sm:text-right">
                            <p className="text-xs uppercase tracking-wider text-(--text-secondary)">
                                Subtotal
                            </p>

                            <p className="text-xl font-semibold text-(--text-primary)">
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center sm:justify-start">
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="
                                mt-5
                                flex
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                px-3
                                py-2
                                text-sm
                                font-medium
                                text-(--text-secondary)
                                transition-all
                                duration-200
                                hover:bg-stone-100
                                hover:text-(--text-primary)
                                sm:justify-start
                            "
                        >
                            <Trash2 size={16} />
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </article>
        
    );
}

export default CartItem;