import NavigationLink from "../ui/NavigationLink";
import Container from "../ui/Container";

const footerLinks = [
    { label: "Home", section: "home" },
    { label: "Shop", section: "shop" },
    { label: "About", section: "about" },
    { label: "Newsletter", section: "newsletter" },
];

function Footer() {
    return (
        <footer className="bg-(--text-primary) text-white">

            <Container className="py-20">

                <div className="flex flex-col items-center">

                    <h2 className="mb-10">
                        <NavigationLink
                            section="home"
                            className="text-4xl uppercase tracking-[0.25em] transition-opacity duration-300 hover:opacity-70"
                        >
                            Second Hand
                        </NavigationLink>
                    </h2>

                    <ul className="flex items-center mb-10 gap-12">
                        {footerLinks.map((link) => (
                            <li key={link.section}>
                                <NavigationLink
                                    section={link.section}
                                    className="text-sm uppercase tracking-widest transition-opacity duration-300 hover:opacity-70"
                                >
                                    {link.label}
                                </NavigationLink>
                            </li>
                        ))}
                    </ul>

                    <p className="text-sm text-gray-300">
                        © 2026 Second Hand
                    </p>

                </div>

            </Container>
        </footer>
    );
}

export default Footer;