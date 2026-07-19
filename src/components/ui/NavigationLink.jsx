import { useNavigate, useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";

function NavigationLink({
    section,
    children,
    className = "",
    onClick,
}) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === "/") {
            scrollToSection(section);
            
            if (onClick) {
                onClick();
            }

            return;
        }

        navigate("/");

        setTimeout(() => {
            scrollToSection(section);

            if (onClick) {
                onClick();
            }
        }, 100);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`cursor-pointer bg-transparent ${className}`}
        >
            {children}
        </button>
    );
}

export default NavigationLink;