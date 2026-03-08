import Input from "../Input";

interface EditRowInputProps {
  value: string;
  onChange: (value: string) => void;
  type: string;
  placeholder?: string;
  inputExtraClassName?: string;
}

const EditRowInput: React.FC<EditRowInputProps> = ({
  value,
  onChange,
  type,
  placeholder,
  inputExtraClassName,
}) => {
  return (
    <td className="py-2 pr-6">
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputClassName={`border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputExtraClassName}`}
      />
    </td>
  );
};

export default EditRowInput;
