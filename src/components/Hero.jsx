function Hero() {
    return (
        <section className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-8">
            <div className="max-w-2xl">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                    Vintage Collection
                </p>

                <h2 className="mb-6 text-7xl leading-none">
                    Rediscover timeless clothing.
                </h2>

                <p className="mb-10 max-w-lg leading-8 text-[var(--text-secondary)]">
                    Carefully selected second-hand pieces inspired by timeless
                    fashion, quality craftsmanship and effortless everyday
                    style.
                </p>

                <button className="border border-[var(--text-primary)] px-8 py-4 uppercase tracking-widest transition-colors duration-300 hover:bg-[var(--text-primary)] hover:text-white">
                    Explore Collection
                </button>
            </div>
        </section>
    );
}

export default Hero;