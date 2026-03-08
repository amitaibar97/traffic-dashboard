import React from "react";
import Input from "./Input";
import type { TrafficStatInputType } from "../types/traffic";

interface LabeledInputProps {
  label: string;
  type: string;
  value: TrafficStatInputType;
  onChange: (value: string) => void;
  InputExtraClassName?: string;
  placeholder?: string;
  minValue?: number;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  type,
  onChange,
  InputExtraClassName = "input-sm",
  placeholder,
  minValue,
}) => {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      containerClassName="flex flex-col gap-1"
      inputClassName={`input-base ${InputExtraClassName}`}
      label={{ value: label, className: "label" }}
      placeholder={placeholder}
      minValue={minValue}
    />
  );
};

export default LabeledInput;
