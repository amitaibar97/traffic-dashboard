import { VIEW_MODES } from "../../constants/traffic";
import { type ViewMode } from "../../types/traffic";

const MODES = Object.values(VIEW_MODES);

interface ChartToggleProps {
  active: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const ChartToggle = ({ active, onChange }: ChartToggleProps) => (
  <div className="flex gap-2 mb-4">
    {MODES.map((mode) => (
      <button
        key={mode}
        onClick={() => onChange(mode)}
        className={`px-4 py-1 rounded-full text-sm capitalize border transition
          ${active === mode ? "active-mode" : "non-active-mode"}`}
      >
        {mode}
      </button>
    ))}
  </div>
);

export default ChartToggle;
