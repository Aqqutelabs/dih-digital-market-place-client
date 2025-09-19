type TextareaProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  name: string;
  placeholder?: string;
};

export default function TextareaInput({
  value,
  onChange,
  label,
  name,
  placeholder,
}: TextareaProps) {
  return (
    <div className="space-y-2 relative">
      <label className="text-[10px] md:text-xs block text-[#171717] font-semibold">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        rows={4}
        className="w-full border border-[#C9D1DA] rounded-lg py-1 px-3 h-[100px] outline-none placeholder:text-[#606062] font-normal text-sm leading-6 focus:border-[#16A249] focus:ring-1 focus:ring-[#16A249] focus:outline-none resize-none"
      />
    </div>
  );
}