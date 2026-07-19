import { stats } from "../../data/stats"
import Container from "../ui/Container";

function About() {
    return (
        <section id="about" className="scroll-mt-35 bg-(--surface)">

            <Container className="py-20 lg:py-32 xl:py-44">

                <div className="mx-auto max-w-5xl text-center">

                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-(--text-secondary)">
                        Our Story
                    </p>

                    <h2 className="mb-6 text-4xl md:text-5xl xl:mb-8 xl:text-6xl">
                        More Than Clothing
                    </h2>

                    <p className="mx-auto mb-14 max-w-3xl leading-7 text-(--text-secondary) md:leading-8 lg:mb-20 xl:mb-24">
                        We believe every garment deserves a second life.
                        Our mission is to curate timeless vintage pieces
                        that celebrate quality craftsmanship, individuality
                        and conscious consumption.
                    </p>

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3"> 
                        {stats.map((stat) => (
                            <div 
                                key={stat.id}
                                className="flex flex-col items-center"
                            >

                                <h3 className="mb-3 text-5xl md:text-6xl">
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

export default About;