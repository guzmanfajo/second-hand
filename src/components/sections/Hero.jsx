import heroImage from "../../assets/images/hero/hero-outfit.png";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {
    return (
        <section id="home" className="scroll-mt-28 bg-[var(--surface)]">

            <Container className="flex items-center gap-24 py-15">

                <div className="w-1/2">
                    <img
                        src={heroImage}
                        alt="Featured vintage collection"
                        className="h-[700px] w-full rounded object-cover"
                    />
                </div>

                <div className="w-1/2">

                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                        Vintage Collection
                    </p>

                    <h2 className="mb-8 text-6xl leading-tight">
                        Rediscover
                        <br />
                        timeless clothing.
                    </h2>

                    <p className="mb-10 max-w-xl leading-8 text-[var(--text-secondary)]">
                        Build a timeless wardrobe with versatile pieces selected for
                        their quality, character and lasting style. Every garment is
                        carefully chosen to bring vintage fashion into everyday life.
                    </p>

                    <Button
                        href="#shop"
                    >
                        Explore Collection
                    </Button>

                </div>

            </Container>

        </section>
    );
}

export default Hero;