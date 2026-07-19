import Container from "../ui/Container";
import Button from "../ui/Button";

function Newsletter() {
    return (
        <section id="newsletter" className="scroll-mt-20 bg-(--section)">
            
            <Container className="py-20 lg:py-28 xl:py-36">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--text-secondary)">
                        Newsletter
                    </p>

                    <h2 className="mb-6 text-4xl md:text-5xl xl:mb-8 xl:text-6xl">
                        Stay Updated
                    </h2>

                    <p className="mb-8 leading-7 text-(--text-secondary) md:leading-8 lg:mb-12">
                        Be the first to discover new arrivals, curated collections
                        and exclusive vintage finds.
                    </p>

                    <form className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                                flex-1
                                border
                                border-(--border)
                                bg-(--surface)
                                px-6
                                py-4
                                outline-none
                                transition-colors
                                focus:border-(--text-primary)
                            "
                        />

                        <Button
                            type="submit"
                            className="w-full sm:w-auto"
                        >
                            Subscribe
                        </Button>

                    </form>

                </div>

            </Container>
        </section>
    );
}

export default Newsletter;