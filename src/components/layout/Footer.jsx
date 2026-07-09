import Container from "../ui/Container";

const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" },
    { label: "Newsletter", href: "#newsletter" },
];

function Footer() {
    return (
        <footer className="bg-(--text-primary) text-white">

            <Container className="flex items-center justify-between py-12">

                <h2>
                    <a
                        href="#home"
                        className="text-3xl uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-70"
                    >                       
                        Second Hand
                    </a>
                </h2>

                <ul className="flex items-center gap-10">
                    {footerLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm uppercase tracking-widest transition-opacity duration-300 hover:opacity-70"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <p className="text-sm text-gray-300">
                    © 2026 Second Hand
                </p>

            </Container>
        </footer>
    );
}

export default Footer;