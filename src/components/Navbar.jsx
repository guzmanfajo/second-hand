import { ShoppingBag } from "lucide-react";

const navigationLinks = [
    "Home",
    "Shop",
    "About",
    "Contact",
];

function Navbar() {
    return (
        <header className="border-b border-[var(--border)] bg-[var(--surface)]">
            <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-12 py-8">
                <h1 className="text-4xl uppercase tracking-[0.2em]">
                    Second Hand
                </h1>

                <div className="flex items-center gap-8">
                    
                    <ul className="flex items-center gap-12">

                        {navigationLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-sm uppercase tracking-widest transition-opacity duration-300 hover:opacity-70"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}   

                    </ul>

                    <a
                        href="#"
                        aria-label="Shopping cart"
                        className="ml-3 transition-opacity duration-300 hover:opacity-70"
                    >
                        <ShoppingBag
                            size={22}
                            strokeWidth={1.5}
                        />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;