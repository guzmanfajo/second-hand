import heroImage from "../assets/images/hero/hero-outfit.png";

function Hero() {
    return (
        <section className="bg-[var(--surface)]">

            <div className="mx-auto flex max-w-[1600px] items-center gap-16 px-12">
            
                <div className="w-2/5">
                    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                        Vintage Collection
                    </p>

                    <h2 className="mb-8 text-[5.5rem] leading-none">
                        Rediscover 
                        <br />
                        timeless clothing.
                    </h2>

                    <div className="mb-8 h-px w-16 bg-[var(--accent)]"></div>

                    <p className="mb-10 max-w-md leading-8 text-[var(--text-secondary)]">
                        Carefully selected second-hand pieces inspired by timeless
                        fashion, quality craftsmanship and effortless everyday
                        style.
                    </p>

                    <button className="border border-[var(--text-primary)] px-10 py-5 uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-[var(--text-primary)] hover:text-white">
                        Explore Collection
                    </button>
                </div>

                <div className="w-3/5">
                    <img
                        src={heroImage}
                        alt="Vintage clothing collection"
                        className="h-[800px] w-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;