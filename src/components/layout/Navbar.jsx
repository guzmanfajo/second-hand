import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import NavigationLink from "../ui/NavigationLink";

const navigationLinks = [
    { label: "Home", section: "home" },
    { label: "Shop", section: "shop" },
    { label: "About", section: "about" },
    { label: "Newsletter", section: "newsletter" },
];

function Navbar() {
    const { cart } = useCart();

    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <header className="sticky top-0 z-50 border-b border-(--border) bg-(--surface)/90 backdrop-blur">
            <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-12 py-8">
                <h1>
                    <NavigationLink
                        section="home"
                        className="text-4xl uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-70"
                    >
                        Second Hand
                    </NavigationLink>
                </h1>

                <div className="flex items-center gap-8">
                    
                    <ul className="flex items-center gap-12">

                        {navigationLinks.map((link) => (
                            <li key={link.href}>
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
                        className="relative ml-3 transition-opacity duration-300 hover:opacity-70"
                    >
                        <ShoppingBag
                            size={22}
                            strokeWidth={1.5}
                        />

                        <span className="absolute -top-2 -rigth-3 flex h-5 w-5 items-center justify-center rounded-full bg-(--text-primary) text-xs text-white">
                            {totalItems}
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;