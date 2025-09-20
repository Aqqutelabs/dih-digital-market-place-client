"use client";

type Props = {
    amount: number;
    color: string;
}

export default function ProgressBar({ amount, color }: Props) {
  return (
    <div className="flex items-center">
      <div className="w-full bg-gray-100 rounded-full h-1.5 relative">
        <div
          className="h-1.5 rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: `${amount}%`,
            backgroundColor: color,
          }}
        />
        {/* Light background extension */}
        <div
          className="absolute top-0 left-0 h-1.5 rounded-full opacity-20"
          style={{
            width: "100%",
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
