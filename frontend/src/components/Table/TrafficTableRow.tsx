import type {
  TrafficStat,
  TrafficStatInput,
} from "../../../../shared/schemas/trafficZodMiddleware";
import { TRAFFIC_FIELDS } from "../../constants/traffic";
import { type TrafficStatInputType } from "../../types/traffic";
import Input from "../Input";

interface ActionButtonProps {
  onClick: () => void;
  className: string;
  children: React.ReactNode;
}

const ActionButton = ({ onClick, className, children }: ActionButtonProps) => (
  <button onClick={onClick} className={`${className} transition`}>
    {children}
  </button>
);

const StatValueTd = ({ value }: { value: TrafficStatInputType }) => (
  <td className="py-3 pr-6 text-text">{value}</td>
);

const EditStatValueTd = ({ children }: { children: React.ReactNode }) => (
  <td className="py-2 pr-6">{children}</td>
);

interface ViewRowProps {
  stat: TrafficStat;
  onEdit: () => void;
  onDelete: () => void;
}

const ViewRow = ({ stat, onEdit, onDelete }: ViewRowProps) => (
  <>
    <StatValueTd value={stat.date} />
    <StatValueTd value={stat.visits} />
    <td className="py-3 flex gap-3">
      <button
        onClick={onEdit}
        className="text-primary hover:text-primary-dark transition"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="text-danger hover:text-danger-dark transition"
      >
        Delete
      </button>
    </td>
  </>
);

interface EditRowProps {
  editData: TrafficStatInput;
  onChange: <K extends keyof TrafficStatInput>(
    key: K,
    value: TrafficStatInput[K],
  ) => void;
  onSave: () => void;
  onCancel: () => void;
}

const EditRow = ({ editData, onChange, onSave, onCancel }: EditRowProps) => (
  <>
    <EditStatValueTd>
      <Input
        type="date"
        value={editData.date}
        onChange={(v) => onChange(TRAFFIC_FIELDS.DATE, v)}
        inputClassName="input-sm"
      />
    </EditStatValueTd>
    <EditStatValueTd>
      <Input
        type="number"
        value={String(editData.visits)}
        onChange={(v) => onChange(TRAFFIC_FIELDS.VISITS, Number(v))}
        inputClassName="input-sm w-24"
        minValue={1}
      />
    </EditStatValueTd>
    <td className="py-2 flex gap-2">
      <ActionButton
        onClick={onSave}
        className="text-success hover:text-success-hover font-medium "
      >
        Save
      </ActionButton>
      <ActionButton
        onClick={onCancel}
        className="text-muted hover:text-muted-hover"
      >
        Cancel
      </ActionButton>
    </td>
  </>
);

interface TrafficTableRowProps {
  stat: TrafficStat;
  isEditing: boolean;
  editData: TrafficStatInput;
  onEdit: () => void;
  onDelete: () => void;
  onChange: <K extends keyof TrafficStatInput>(
    key: K,
    value: TrafficStatInput[K],
  ) => void;
  onSave: () => void;
  onCancel: () => void;
}

const TrafficTableRow = ({
  stat,
  isEditing,
  ...rowProps
}: TrafficTableRowProps) => (
  <tr className="border-b border-border hover:bg-gray-50 transition">
    {isEditing ? (
      <EditRow {...rowProps} />
    ) : (
      <ViewRow
        stat={stat}
        onEdit={rowProps.onEdit}
        onDelete={rowProps.onDelete}
      />
    )}
  </tr>
);

export default TrafficTableRow;
