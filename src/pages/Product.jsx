import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard";

function Product() {
    const { id } = useParams();

    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return (
            <>
                <main className="mx-auto max-w-[1600px] px-12 py-24">
                    <h1 className="mb-6 text-5xl">
                        Product not found
                    </h1>

                    <p className="text-(--text-secondary)">
                        The product you're looking doesn't exist.
                    </p>
                </main>
            </>
        );
    }

    const {
    name,
    price,
    size,
    category,
    image,
    description,
    } = product;

    const relatedProducts = products
        .filter(
            (item) =>
                item.category === category &&
                item.id !== product.id
        )
        .slice(0, 3);

    return (
        <>
            <main className="bg-(--surface)">
                <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-20 px-12 py-20">

                    <div>
                        <img
                            src={image}
                            alt={name}
                            className="h-150 w-fit rounded object-cover border border-(--border)"
                        />
                    </div>

                    <div className="flex flex-col justify-center">

                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--text-secondary)">
                            {category}
                        </p>

                        <h1 className="mb-8 text-6xl leading-tight">
                            {name}
                        </h1>

                        <p className="mb-8 text-3xl">
                            ${price.toFixed(2)}
                        </p>

                        <div className="mb-8 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-green-600"></span>
                            <p className="text-sm uppercase tracking-widest">
                                In Stock
                            </p>
                        </div>

                        <p className="mb-10 max-w-xl leading-8 text-(--text-secondary)">
                            {description}
                        </p>

                        <hr className="mb-8 border-(--border)" />

                        <div className="mb-8">
                            <p className="mb-2 text-sm uppercase tracking-widest text-(--text-secondary)">
                                Size
                            </p>
                            <p className="text-xl">
                                {size}
                            </p>
                        </div>

                        <hr className="mb-8 border-(--border)" />

                        <Button className="w-fit">
                            Add to Cart
                        </Button>

                    </div>

                </div>

                <section className="mx-auto mt-32 max-w-7xl py-10">

                    <div className="mb-12 flex flex-col items-center">
                        <h2 className="mb-4 text-5xl">
                            You May Also Like
                        </h2>

                        <div className="h-px w-24 bg-(--text-primary)"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-8">

                        {relatedProducts.map((relatedProduct) => (
                            <ProductCard
                                key={relatedProduct.id}
                                product={relatedProduct}
                                variant="compact"
                            />
                        ))}
                    </div>
                </section>

            </main>
        </>
    );
}

export default Product;