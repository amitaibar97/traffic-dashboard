import LabeledInput from "../LabeledInput";

interface TrafficTableFiltersProps {
  dateFrom: string;
  dateTo: string;
  onFromChange: (v: string) => void;
  onToChange: (v: string) => void;
  onClear: () => void;
  hasFilters: boolean;
}

const TrafficTableFilters = ({
  dateFrom,
  dateTo,
  onFromChange,
  onToChange,
  onClear,
  hasFilters,
}: TrafficTableFiltersProps) => (
  <div className="flex flex-wrap gap-4 mb-4 items-end">
    <LabeledInput
      label="From"
      onChange={onFromChange}
      value={dateFrom}
      type="date"
    />
    <LabeledInput label="To" onChange={onToChange} value={dateTo} type="date" />
    {hasFilters && (
      <button
        onClick={onClear}
        className="text-xs text-muted hover:text-muted-hover transition"
      >
        Clear
      </button>
    )}
  </div>
);

export default TrafficTableFilters;
