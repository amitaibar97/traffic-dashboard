import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TRAFFIC_FIELDS } from "../../constants/traffic";
import type { TrafficStatInput } from "../../../../shared/schemas/trafficZodMiddleware";

interface TrafficLineChartProps {
  data: TrafficStatInput[];
}

const TrafficLineChart = ({ data }: TrafficLineChartProps) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={TRAFFIC_FIELDS.DATE} tick={{ fontSize: 11 }} />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey={TRAFFIC_FIELDS.VISITS}
        stroke="#3b82f6"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default TrafficLineChart;
