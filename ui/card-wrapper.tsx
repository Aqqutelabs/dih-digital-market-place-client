'use client';


type CardProps = {
  children: React.ReactNode;
  height?: string;
  width?: string;
  border?: boolean;
};

export default function CardComponent({ 
    children,
    height = "fit-content",
    width,
    border,
}: CardProps) {
  return (
    <div className={`w-full rounded-xl bg-white shadow-md py-5 ${border && 'border border-[#233E9733]'}`} style={{ height: height, width: width }}>
        { children }
    </div>
  );
}