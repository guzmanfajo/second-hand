function ProductCard({ product }) {
    const {
        name,
        price,
        size,
        category,
        image,
    } = product;

    return (
        <article className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-2">
            <img
                src={image}
                alt={name}
                className="h-[420px] w-full object-cover"
            />

            <div className="space-y-3 p-6">
                <div>
                    <h3 className="text-3xl">{name}</h3>

                    <p className="mt-1 text-sm uppercase tracking-wider text-[var(--text-secondary)]">
                        {category}  • Size {size}
                    </p>
                </div>

                <p className="text-lg font-medium">
                    ${price.toFixed(2)}
                </p>
            </div>
        </article>
    );
}

export default ProductCard; 