import { stats } from "../../data/stats"
import Container from "../ui/Container";

function OurStory() {
    return (
        <section id="about" className="bg-[var(--surface)]">

            <Container className="py-32">

                <div className="mx-auto max-w-4xl text-center">

                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                        Our Story
                    </p>

                    <h2 className="mb-8 text-6xl">
                        More Than Clothing
                    </h2>

                    <p className="mx-auto mb-20 max-w-3xl leading-8 text-[var(--text-secondary)]">
                        We believe every garment deserves a second life.
                        Our mission is to curate timeless vintage pieces
                        that celebrate quality craftsmanship, individuality
                        and conscious consumption.
                    </p>

                    <div className="grid grid-cols-3 gap-12">
                        {stats.map((stat) => (
                            <div key={stat.id}>

                                <h3 className="mb-3 text-5xl">
                                    {stat.value}
                                </h3>

                                <p className="uppercase tracking-widest text-[var(--text-secondary)]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default OurStory;