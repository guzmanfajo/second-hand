import { stats } from "../../data/stats"
import Container from "../ui/Container";

function OurStory() {
    return (
        <section id="about" className="scroll-mt-16 bg-(--surface)">

            <Container className="py-40">

                <div className="mx-auto max-w-5xl text-center">

                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--text-secondary)">
                        Our Story
                    </p>

                    <h2 className="mb-8 text-6xl">
                        More Than Clothing
                    </h2>

                    <p className="mx-auto mb-24 max-w-3xl leading-8 text-(--text-secondary)">
                        We believe every garment deserves a second life.
                        Our mission is to curate timeless vintage pieces
                        that celebrate quality craftsmanship, individuality
                        and conscious consumption.
                    </p>

                    <div className="grid grid-cols-3 gap-12">
                        {stats.map((stat) => (
                            <div key={stat.id}>

                                <h3 className="mb-4 text-6xl">
                                    {stat.value}
                                </h3>

                                <div className="mx-auto mb-5 h-px w-16 bg-(--border)"></div>

                                <p className="text-sm uppercase tracking-[0.35em] text-(--text-secondary)">
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