import { TRAFFIC_FIELDS } from "../../constants/traffic";
import { useTrafficForm } from "../../customHooks/useTrafficForm";
import { type TrafficEntry } from "../../types/traffic";
import LabeledInput from "../LabeledInput";

interface TrafficFormProps {
  onSubmit: (data: TrafficEntry) => void;
}

const TrafficForm = ({ onSubmit }: TrafficFormProps) => {
  const { formData, error, updateField, handleSubmit } =
    useTrafficForm(onSubmit);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-emphasized mb-4">Add Entry</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-end">
        <LabeledInput
          label="Date"
          type="date"
          value={formData.date}
          onChange={(value) => updateField(TRAFFIC_FIELDS.DATE, value)}
          InputExtraClassName="px-4 py-2"
        />
        <LabeledInput
          label="Visits"
          type="number"
          value={formData.visits}
          onChange={(value) => updateField(TRAFFIC_FIELDS.VISITS, Number(value))}
          placeholder="e.g. 120"
          InputExtraClassName="px-4 py-2"
          minValue={1}
        />
        {error && <p className="w-full text-xs text-danger">{error}</p>}
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TrafficForm;
