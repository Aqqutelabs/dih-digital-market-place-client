"use client";

export default function ProgressTab({ color, text }: { color: string, text: string }) {
  return (
    <div className="flex items-center justify-end">
      <span
        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium border"
        style={{borderColor: color, color: color, backgroundColor: "transparent"}}
      >
        { text }
      </span>
    </div>
  );
}
