function Container({ children, className = "" }) {
    return (
        <div
            className={`
                mx-auto 
                max-w-[1600px] 
                px-5
                sm:px-6
                lg:px-10
                xl:px-12
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Container;