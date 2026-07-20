import { ShoppingBag } from "lucide-react";

function Toast({ toast }) {
    if (!toast) return null;

    return (
        <div
            className="
                fixed
                top-20
                right-4
                z-50
                w-[calc(100vw-2rem)]
                max-w-sm
                rounded-xl
                border
                border-(--border)
                bg-(--surface)
                p-4
                shadow-lg
                animate-[slideIn_.25s_ease-out]
            "
        >
            <div className="flex items-start gap-3">
                <ShoppingBag
                    size={20}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-(--text-primary)"
                />

                <div>
                    <h3 className="font-semibold text-(--text-primary)">
                        {toast.title}
                    </h3>

                    {toast.message && (
                        <p className="mt-1 text-sm text-(--text-secondary)">
                            {toast.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Toast;