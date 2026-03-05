interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}
const Input = ({ placeholder, onChange, value, type }: InputProps) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
