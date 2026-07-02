function Navbar() {
    return (
        <header className="border-b border-[var(--border)] bg-[var(--surface)]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
                <h1 className="text-4xl uppercase tracking-[0.2em]">
                    Second Hand
                </h1>

                <ul className="flex items-center gap-8">
                    <li>
                        <a
                            href="#"
                            className="text-sm uppercase tracking-widest transition-opacity duration-300 hover:opacity-70"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm uppercase tracking-widest transition-opacity duration-300 hover:opacity-70"
                        >
                            Shop
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm uppercase tracking-widest transition-opacity duration-300 hover:opacity-70"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm uppercase tracking-widest transition-opacity duration-300 hover:opacity-70"
                        >
                            Contact
                        </a>
                    </li>                   
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;