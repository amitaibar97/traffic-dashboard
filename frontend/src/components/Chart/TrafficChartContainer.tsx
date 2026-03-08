import { useState } from "react";
import { type ViewMode } from "../../types/traffic";
import { aggregateData } from "../../utils/aggregateData";
import ChartToggle from "./ChartToggle";
import TrafficLineChart from "./TrafficLineChart";
import { VIEW_MODES } from "../../constants/traffic";
import type { TrafficStatInput } from "../../../../shared/schemas/trafficZodMiddleware";

interface TrafficChartContainerProps {
  data: TrafficStatInput[];
}

const TrafficChartContainer = ({ data }: TrafficChartContainerProps) => {
  const [mode, setMode] = useState<ViewMode>(VIEW_MODES.DAILY);
  const aggregated = aggregateData(data, mode);

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <ChartToggle active={mode} onChange={setMode} />
      <TrafficLineChart data={aggregated} />
    </div>
  );
};

export default TrafficChartContainer;
