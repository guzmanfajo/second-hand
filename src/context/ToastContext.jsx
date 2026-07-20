import { createContext, useContext, useState, useRef } from "react";
import Toast from "../components/ui/Toast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toast, setToast] = useState(null);
    const timeoutRef = useRef(null);

    function showToast(title, message = "") {
        setToast({
            title,
            message,
        });

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setToast(null);
        }, 2500);
    }

    return (
        <ToastContext.Provider
            value={{
                toast,
                showToast,
            }}
        >
            {children}

            <Toast toast={toast} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}