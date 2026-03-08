import { useTableFilter } from "../../customHooks/useTableFilter";
import { useTableSort } from "../../customHooks/useTableSort";
import { useEditRow } from "../../customHooks/useEditRow";
import TrafficTableFilters from "./TrafficTableFilters";
import TrafficTableRow from "./TrafficTableRow";
import SortableHeader from "./SortableHeader";
import { TRAFFIC_FIELDS } from "../../constants/traffic";
import type {
  TrafficStatInput,
  TrafficStat,
} from "../../../../shared/schemas/trafficZodMiddleware";

interface Props {
  stats: TrafficStat[];
  onUpdate: (params: { id: string; data: TrafficStatInput }) => void;
  onDelete: (id: string) => void;
}

export const TrafficTableContainer = ({ stats, onUpdate, onDelete }: Props) => {
  const { filtered, ...filterProps } = useTableFilter(stats);
  const { sorted, handleSort, sortIcon } = useTableSort(filtered);
  const { editingId, editData, startEdit, cancelEdit, updateField } =
    useEditRow();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Traffic Stats
      </h2>

      <TrafficTableFilters {...filterProps} />

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <SortableHeader
                field={TRAFFIC_FIELDS.DATE}
                label="Date"
                sortIcon={sortIcon}
                onSort={handleSort}
              />
              <SortableHeader
                field={TRAFFIC_FIELDS.VISITS}
                label="Visits"
                sortIcon={sortIcon}
                onSort={handleSort}
              />
              <th className="pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((stat) => (
              <TrafficTableRow
                key={stat.id}
                stat={stat}
                isEditing={editingId === stat.id}
                editData={editData}
                onEdit={() =>
                  startEdit(stat.id, { date: stat.date, visits: stat.visits })
                }
                onDelete={() => onDelete(stat.id)}
                onChange={updateField}
                onSave={() => {
                  onUpdate({ id: stat.id, data: editData });
                  cancelEdit();
                }}
                onCancel={cancelEdit}
              />
            ))}
          </tbody>
        </table>
        {sorted.length === 0 && <p className="empty-state">No data found</p>}
      </div>
    </div>
  );
};
