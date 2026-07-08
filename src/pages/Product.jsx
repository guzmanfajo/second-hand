import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Button from "../components/ui/Button";

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

                    <p className="text-[var(--text-secondary)]">
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

    return (
        <>
            <main className="bg-[var(--surface)]">
                <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-24 px-12 py-20">

                    <div>
                        <img
                            src={image}
                            alt={name}
                            className="h-[700px] w-full rounded object-cover border border-[var(--border)]"
                        />
                    </div>

                    <div className="flex flex-col justify-center">

                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                            {category}
                        </p>

                        <h1 className="mb-8 text-6xl leading-tight">
                            {name}
                        </h1>

                        <p className="mb-8 text-3xl">
                            ${price.toFixed(2)}
                        </p>

                        <p className="mb-10 max-w-xl leading-8 text-[var(--text-secondary)]">
                            {description}
                        </p>

                        <p className="mb-10 uppercase tracking-widest">
                            Size {size}
                        </p>

                        <Button>
                            Add to Cart
                        </Button>

                    </div>

                </div>
            </main>
        </>
    );
}

export default Product;