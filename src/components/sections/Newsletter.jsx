import Container from "../ui/Container";
import Button from "../ui/Button";

function Newsletter() {
    return (
        <section id="newsletter" className="bg-[var(--section)]">
            
            <Container className="py-32">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                        Newsletter
                    </p>

                    <h2 className="mb-8 text-6xl">
                        Stay Updated
                    </h2>

                    <p className="mb-12 leading-8 text-[var(--text-secondary)]">
                        Be the first to discover new arrivals, curated collections
                        and exclusive vintage finds.
                    </p>

                    <form className="mx-auto flex max-w-2xl gap-4">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 border border-[var(--border)] bg-[var(--surface)] px-6 py-4 outline-none"
                        />

                        <Button type="submit">
                            Subscribe
                        </Button>

                    </form>

                </div>

            </Container>
        </section>
    );
}

export default Newsletter;