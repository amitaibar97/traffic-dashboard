import { type SortField } from "../../types/traffic";

interface SortableHeaderProps {
  field: SortField;
  label: string;
  sortIcon: (field: SortField) => string;
  onSort: (field: SortField) => void;
}

const SortableHeader = ({
  field,
  label,
  sortIcon,
  onSort,
}: SortableHeaderProps) => (
  <th
    className="pb-3 pr-6 cursor-pointer hover:text-emphasized transition select-none"
    onClick={() => onSort(field)}
  >
    {label} {sortIcon(field)}
  </th>
);

export default SortableHeader;
