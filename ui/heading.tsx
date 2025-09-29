type HeadingProps = {
    heading: string;
    subtitle?: string;
    className?: string;
}

export default function Heading({ heading, subtitle, className }: HeadingProps) {
    return (
        <div className={`space-y-1 text-[#122231] ${className}`}>
            <h2 className="text-base md:text-xl font-semibold">{heading}</h2>
            {subtitle && <p className="text-xs md:text-sm font-normal">{subtitle}</p>}
        </div>
    )
}