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
            <article className="
                        group
                        flex
                        h-full
                        flex-col
                        rounded-lg
                        border
                        border-(--border)
                        bg-(--surface)
                        p-4
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:border-(--accent)
                        lg:p-5
                        "
            > 
                <img
                    src={image}
                    alt={name}
                    className="
                        aspect-4/5
                        w-full
                        rounded
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                <div className="flex flex-1 flex-col pt-6">
                    <div>
                        <h3 className="min-h-14 text-2xl md:min-h-16 md:text-3xl">{name}</h3>

                        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-(--text-secondary)">
                            {category}  · Size {size}
                        </p>
                    </div>

                    <p className="mt-auto pt-4 text-lg font-medium tracking-wide md:pt-6 md:text-xl">
                        ${price.toFixed(2)}
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default ProductCard; 