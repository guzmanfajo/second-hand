function Button({
    children,
    href,
    type = "button",
    className = "",
}) {
    const baseClasses =
        "inline-block border border-(--text-primary) px-8 py-4 uppercase tracking-widest transition-colors duration-300 hover:bg-(--text-primary) hover:text-white";

        if (href) {
            return (
                <a
                    href={href}
                    className={`${baseClasses} ${className}`}
                >
                    {children}
                </a>
            );
        }

        return (
            <button
                type={type}
                className={`${baseClasses} ${className}`}
            >
                {children}
            </button>
        );
}

export default Button;