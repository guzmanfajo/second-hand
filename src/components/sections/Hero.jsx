import heroImage from "../../assets/images/hero/hero-outfit.png";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {
    return (
        <section id="home" className="bg-[var(--surface)]">

            <Container className="flex items-center gap-16 py-24">
            
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

                    <Button>
                        Explore Collection
                    </Button>
                </div>

                <div className="w-3/5">
                    <img
                        src={heroImage}
                        alt="Vintage clothing collection"
                        className="h-[680px] w-full object-cover"
                    />
                </div>

            </Container>
        </section>
    );
}

export default Hero;