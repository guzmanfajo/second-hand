function Button({
    children,
    href,
    type = "button",
}) {
    const className =
        "inline-block border border-[var(--text-primary)] px-8 py-4 uppercase traking-widest transition-colors duration-300 hover:bg-[var(--text-primary)] hover:text-white";

        if (href) {
            return (
                <a
                    href={href}
                    className={className}
                >
                    {children}
                </a>
            );
        }

        return (
            <button
                type={type}
                className={className}
            >
                {children}
            </button>
        );
}

export default Button;