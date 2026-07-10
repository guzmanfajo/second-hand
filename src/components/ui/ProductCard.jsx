import { Link } from "react-router-dom";

function ProductCard({
        product,
        variant = "default",
     }) {

    const {
        id,
        name,
        price,
        size,
        category,
        image,
    } = product;

    const imageClasses =
        variant === "compact"
            ? "h-[320px] w-full object-cover"
            : "h-[420px] w-full object-cover";

    return (
        <Link to={`/products/${id}`}>
            <article className="group overflow-hidden rounded-lg border border-(--border) bg-(--surface) transition-all duration-300 hover:-translate-y-2 hover:border-(--accent)">
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className={imageClasses}
                    />
                </div>

                <div className="space-y-3 p-6">
                    <div>
                        <h3 className="min-h-20 text-3xl">{name}</h3>

                        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-(--text-secondary)">
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