import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import Container from "../ui/Container";
import NavigationLink from "../ui/NavigationLink";

const navigationLinks = [
    { label: "Home", section: "home" },
    { label: "Shop", section: "shop" },
    { label: "About", section: "about" },
    { label: "Newsletter", section: "newsletter" },
];

function Navbar() {
    const { cart } = useCart();

    const [isOpen, setIsOpen] = useState(false);

    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <header className="sticky top-0 z-50 border-b border-(--border) bg-(--surface)/90 backdrop-blur">
            <nav>
                <Container className="flex items-center justify-between py-5 lg:py-8">
                    <h1>
                        <NavigationLink
                            section="home"
                            className="
                                text-2xl
                                uppercase
                                tracking-[0.2em]
                                transition-opacity
                                duration-300
                                hover:opacity-70
                                sm:text-3xl
                                lg:text-4xl
                            "
                        >
                            Second Hand
                        </NavigationLink>
                    </h1>

                    <div className="flex items-center gap-4 lg:gap-8">
                        
                        <ul className="hidden items-center gap-12 lg:flex">

                            {navigationLinks.map((link) => (
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

                        <Link
                            to="/cart"
                            aria-label="Shopping cart"
                            className="relative transition-transform duration-200 hover:scale-105"
                        >
                            <ShoppingBag
                                size={22}
                                strokeWidth={1.5}
                                className="transition-colors duration-200"
                            />

                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-(--text-primary) px-1 text-xs font-medium text-white">
                                    {totalItems > 99 ? "99+" : totalItems}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded p-1 transition-colors hover:bg-stone-100 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X size={24} strokeWidth={1.5} />
                            ) : (
                                <Menu size={24} strokeWidth={1.5} />
                            )}
                        </button>
                    </div>
                </Container>
            </nav>

            {isOpen && (
                <div className="border-t border-(--border) bg-(--surface) lg:hidden">
                    <ul className="flex flex-col py-4">

                        {navigationLinks.map((link) => (
                            <li key={link.section}>
                                <NavigationLink
                                    section={link.section}
                                    className="block w-full px-5 py-4 text-left text-sm uppercase tracking-widest transition-colors duration-300 hover:bg-stone-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </NavigationLink>
                            </li>
                        ))}

                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;