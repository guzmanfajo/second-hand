import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const {
        id,
        name,
        price,
        size,
        category,
        image,
    } = product;

    return (
        <Link to={`/products/${id}`}>
            <article className="group overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]">
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="h-[420px] w-full object-cover"
                    />
                </div>

                <div className="space-y-3 p-6">
                    <div>
                        <h3 className="text-3xl">{name}</h3>

                        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                            {category}  · Size {size}
                        </p>
                    </div>

                    <p className="text-xl font-medium tracking-wide">
                        ${price.toFixed(2)}
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default ProductCard; 