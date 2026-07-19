import { useState } from "react";
import ProductCard from "../ui/ProductCard";
import Container from "../ui/Container";
import { products } from "../../data/products";

function Products() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter(
                (product) => product.category === selectedCategory
            );

    const categories = [
        "All",
        ...new Set(products.map((product) => product.category)),
    ];

    return (
        <section id="shop" className="bg-(--section)">

            <Container className="max-w-[1650px] py-16 lg:py-24 xl:py-32">
                
                <div className="mb-10 lg:mb-14">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-(--text-secondary)">
                        New Arrivals
                    </p>

                    <h2 className="mb-4 text-4xl md:text-5xl xl:text-6xl">
                        Curated Vintage Pieces
                    </h2>

                    <p className="max-w-2xl leading-7 text-(--text-secondary) md:leading-8">
                        A carefully selected collection of timeless second-hand
                        clothing chosen for quality, character and everyday style.
                    </p>
                </div>

                <div className="mb-10 flex flex-wrap gap-3 lg:mb-12 lg:gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-xl px-5 py-2 text-sm uppercase tracking-wider ${
                                category === selectedCategory
                                    ? "border-(--text-primary) bg-(--text-primary) text-white"
                                    : "border-(--border) hover:bg-(--text-primary) hover:text-white"
                            }`}
                                    >
                            {category}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}

export default Products;