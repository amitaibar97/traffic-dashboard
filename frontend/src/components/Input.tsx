import type { TrafficStatInputType } from "../types/traffic";

interface InputProps {
  value: TrafficStatInputType;
  onChange: (value: string) => void;
  type: string;
  placeholder?: string;
  label?: { value: string; className?: string };
  containerClassName?: string;
  inputClassName?: string;
  minValue?: number;
}

const Input = ({
  placeholder,
  onChange,
  value,
  type,
  label,
  containerClassName,
  inputClassName,
  minValue,
}: InputProps) => {
  return (
    <div className={containerClassName}>
      {label && <label className={label.className}>{label.value}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClassName}
        min={minValue}
      />
    </div>
  );
};

export default Input;
