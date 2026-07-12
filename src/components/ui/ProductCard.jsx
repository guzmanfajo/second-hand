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

    return (
        <Link to={`/products/${id}`}>
            <article className="group flex h-full flex-col rounded-lg border border-(--border) bg-(--surface) p-4 transition-all duration-300 hover:-translate-y-2 hover:border-(--accent)"> 
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover rounded transition-transform duration-500 group-hover:scale-105"
                />

                <div className="flex flex-1 flex-col pt-6">
                    <div>
                        <h3 className="min-h-20 text-3xl">{name}</h3>

                        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-(--text-secondary)">
                            {category}  · Size {size}
                        </p>
                    </div>

                    <p className="mt-auto pt-6 text-xl font-medium tracking-wide">
                        ${price.toFixed(2)}
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default ProductCard; 