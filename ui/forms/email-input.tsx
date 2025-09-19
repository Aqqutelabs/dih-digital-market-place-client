
type EmailInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  name: string;
}

export default function EmailInput({
  value,
  onChange,
  placeholder = "Enter your email address",
  label,
  name,
}: EmailInputProps) {
  return (
    <div className="space-y-2">
        {label && <label htmlFor={name} className="text-[10px] md:text-xs block text-[#171717] font-semibold">{label}</label>}
        <input
        type="email"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-[#D8D8D8] rounded-lg py-1 px-3 h-10 md:h-12 outline-none placeholder:text-[#606062] font-normal text-xs md:text-sm leading-6 focus:border-[#16A249] focus:ring-1 focus:ring-[#16A249] focus:outline-none transition duration-200"
        autoComplete="email"
        />
    </div>
  );

}
