import ProductCard from "./ProductCard";
import { products } from "../data/products";

const categories = [
    "All",
    "Jackets",
    "Shirts",
    "Sweaters",
    "Jeans",
];

function Products() {
    return (
        <section className="bg-[var(--surface)]">

            <div className="mx-auto max-w-[1600px] px-12 py-24">
                
                <div className="mb-14">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                        New Arrivals
                    </p>

                    <h2 className="mb-4 text-5xl">
                        Curated Vintage Pieces
                    </h2>

                    <p className="max-w-2xl leading-8 text-[var(--text-secondary)]">
                        A carefully selected collection of timeless second-hand
                        clothing chosen for quality, character and everyday style.
                    </p>
                </div>

                <div className="mb-12 flex items-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`rounded-full border px-6 py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${
                                category === "All"
                                    ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-white"
                                    : "border-[var(--border)] hover:bg-[var(--text-primary)] hover:text-white"
                            }`}
                                    >
                            {category}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Products;