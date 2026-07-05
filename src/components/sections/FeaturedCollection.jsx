import featuredImage from "../../assets/images/featured/featured-collection.png";
import Container from "../ui/Container";
import Button from "../ui/Button";

function FeaturedCollection() {
    return (
        <section id="featured" className="bg-[var(--section)]">

            <Container className="flex items-center gap-24 py-32">

                <div className="w-1/2">
                    <img
                        src={featuredImage}
                        alt="Featured vintage collection"
                        className="h-[700px] w-full rounded object-cover"
                    />
                </div>

                <div className="w-1/2">

                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                        Featured Collection
                    </p>

                    <h2 className="mb-8 text-6xl leading-tight">
                        Everyday Vintage
                        <br />
                        Essentials
                    </h2>

                    <p className="mb-10 max-w-xl leading-8 text-[var(--text-secondary)]">
                        Build a timeless wardrobe with versatile pieces selected for
                        their quality, character and lasting style. Every garment is
                        carefully chosen to bring vintage fashion into everyday life.
                    </p>

                    <Button>
                        Shop Featured
                    </Button>

                </div>

            </Container>

        </section>
    );
}

export default FeaturedCollection;