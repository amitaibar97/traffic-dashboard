interface FormFieldProps {
  label: string;
  type: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
}

const FormField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  min,
}: FormFieldProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-gray-500">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
    />
  </div>
);

export default FormField;
