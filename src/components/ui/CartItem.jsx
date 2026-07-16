function CartItem({ item }) {
    return (
        <article className="flex gap-6 rounded-xl border border-(--border) bg-(--surface) p-4 shadow-sm">
            <img
                src={item.image}
                alt={item.name}
                className="h-32 w-24 rounded-lg object-cover"
            />

            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-(--text-primary)">
                        {item.name}
                    </h2>

                    <p className="mt-2 text-(--text-secondary)">
                        Size: {item.size}
                    </p>

                    <p className="mt-2 text-lg font-medium text-(--text-primary)">
                        Price: ${item.price}
                    </p>
                </div>

                <p className="text-(--text-secondary)">
                    Quantity: {item.quantity}
                </p>
                
            </div>
        </article>
        
    );
}

export default CartItem;