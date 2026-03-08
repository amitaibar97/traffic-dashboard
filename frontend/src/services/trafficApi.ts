import type {
  TrafficStat,
  TrafficStatInput,
} from "../../../shared/schemas/trafficZodMiddleware";
import { fetchRequest } from "../utils/apiClient";

const TRAFFIC_STATS_ENDPOINT = "/traffic-stats";

export const trafficApi = {
  getAll: () => fetchRequest<TrafficStat[]>(TRAFFIC_STATS_ENDPOINT),

  create: (data: TrafficStatInput) =>
    fetchRequest<TrafficStat>(TRAFFIC_STATS_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (id: string, data: TrafficStatInput) =>
    fetchRequest<TrafficStat>(`${TRAFFIC_STATS_ENDPOINT}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: string) =>
    fetchRequest<void>(`${TRAFFIC_STATS_ENDPOINT}/${id}`, { method: "DELETE" }),
};
