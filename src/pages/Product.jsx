import { useParams } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { products } from "../data/products";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard";

function Product() {
    const { id } = useParams();

    const { addToCart } = useCart();

    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return (
            <>
                <main className="bg-(--surface)">
                    <Container className="py-16 lg:py-24">
                        <h1 className="mb-6 text-5xl">
                            Product not found
                        </h1>

                        <p className="text-(--text-secondary)">
                            The product you're looking doesn't exist.
                        </p>
                    </Container>
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

    const sameCategoryProducts = products.filter(
        (item) =>
            item.category === category &&
            item.id !== product.id
    );

    const otherProducts = products
        .filter(
            (item) =>
                item.category !== category &&
                item.id !== product.id
        )
        .sort(() => Math.random() - 0.5);

    const relatedProducts = [
        ...sameCategoryProducts,
        ...otherProducts,
    ].slice(0, 3);

    return (
            <main className="bg-(--surface)">
                <Container
                    className="
                        grid
                        grid-cols-1
                        gap-12
                        py-16
                        lg:grid-cols-2
                        lg:gap-16
                        xl:gap-20
                        xl:py-20
                    "
                >

                    <div className="
                            mx-auto
                            w-full
                            max-w-md
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            lg:max-w-xl
                        "
                    >                   
                        <div className="aspect-4/5 overflow-hidden rounded border border-(--border)">
                            <img
                                src={image}
                                alt={name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center text-center lg:text-left">

                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--text-secondary)">
                            {category}
                        </p>

                        <h1 className="
                                mb-6
                                text-4xl
                                leading-tight
                                md:text-5xl
                                xl:mb-8
                                xl:text-6xl
                            "
                        >
                            {name}
                        </h1>

                        <p className="mb-8 text-2xl md:text-3xl">
                            ${price.toFixed(2)}
                        </p>

                        <div className="mb-8 flex items-center justify-center gap-3 lg:justify-start">
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

                        <div className="flex justify-center lg:justify-start">
                            <Button 
                                className="w-full sm:w-fit"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </Button>
                        </div>

                    </div>

                </Container>

                <section className="mt-20 border-t border-(--border) lg:mt-28 xl:mt-32">
                     <Container className="py-16 lg:py-20">
                        <div className="mb-10 flex flex-col items-center lg:mb-12">
                            <h2 className="mb-4 text-3xl md:text-4xl xl:text-5xl">
                                You May Also Like
                            </h2>

                            <div className="h-px w-24 bg-(--text-primary)"></div>
                        </div>
                        
                        <div className="mx-auto max-w-7xl">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">

                                {relatedProducts.map((relatedProduct) => (
                                    <ProductCard
                                        key={relatedProduct.id}
                                        product={relatedProduct}
                                    />
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

            </main>
    );
}

export default Product;