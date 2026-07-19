import heroImage from "../../assets/images/hero/hero.png";
import Container from "../ui/Container";
import Button from "../ui/Button";

function Hero() {
    return (
        <section id="home" className="scroll-mt-28 bg-(--surface)">

            <Container className="
                            flex
                            flex-col
                            items-center
                            gap-12
                            py-16
                            lg:flex-row
                            lg:gap-20
                            xl:gap-24
                            xl:py-20
                        "
            >

                <div className="w-full lg:w-1/2">
                    <img
                        src={heroImage}
                        alt="Featured vintage collection"
                        className="
                            h-105
                            w-full
                            rounded
                            object-cover
                            md:h-137.5
                            xl:h-175
                        "
                    />
                </div>

                <div className="w-full text-center lg:w-1/2 lg:text-left">

                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--text-secondary)">
                        Vintage Collection
                    </p>

                    <h2 className="
                            mb-6
                            text-4xl
                            leading-tight
                            md:text-5xl
                            xl:mb-8
                            xl:text-6xl
                        "
                    >
                        Rediscover
                        <br />
                        timeless clothing.
                    </h2>

                    <p className="
                            mb-8
                            max-w-xl
                            text-base
                            leading-7
                            text-(--text-secondary)
                            md:leading-8
                            xl:mb-10
                        "
                    >
                        Build a timeless wardrobe with versatile pieces selected for
                        their quality, character and lasting style. Every garment is
                        carefully chosen to bring vintage fashion into everyday life.
                    </p>

                    <div className="flex justify-center lg:justify-start">
                        <Button href="#shop">
                            Explore Collection
                        </Button>
                    </div>

                </div>

            </Container>

        </section>
    );
}

export default Hero;