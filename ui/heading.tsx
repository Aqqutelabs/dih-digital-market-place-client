type HeadingProps = {
    heading: string;
    subtitle?: string;
}

export default function Heading({ heading, subtitle }: HeadingProps) {
    return (
        <div className="space-y-1 text-[#122231]">
            <h2 className="text-xl font-semibold">{heading}</h2>
            {subtitle && <p className="text-sm font-normal">{subtitle}</p>}
        </div>
    )
}