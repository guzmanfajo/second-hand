import featuredImage from "../assets/images/featured/featured-collection.png";

function FeaturedCollection() {
    return (
        <section className="bg-[var(--section)]">

            <div className="mx-auto flex max-w-[1600px] items-center gap-24 px-12 py-32">

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

                    <a
                        href="#"
                        className="inline-block border border-[var(--text-primary)] px-8 py-4 uppercase tracking-widest transition-colors duration-300 hover:bg-[var(--text-primary)] hover:text-white"
                    >
                        Shop Featured
                    </a>

                </div>

            </div>

        </section>
    );
}

export default FeaturedCollection;