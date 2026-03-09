import type {
  TrafficStat,
  TrafficStatInput,
} from "../../../shared/schemas/trafficZodMiddleware";
import { fetchRequest } from "../utils/apiClient";

const TRAFFIC_STATS_ENDPOINT = "/traffic-stats";

export const trafficApi = {
  getAll: async () => await fetchRequest<TrafficStat[]>(TRAFFIC_STATS_ENDPOINT),

  create: async (data: TrafficStatInput) =>
    await fetchRequest<TrafficStat>(TRAFFIC_STATS_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: async (id: string, data: TrafficStatInput) =>
    await fetchRequest<TrafficStat>(`${TRAFFIC_STATS_ENDPOINT}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: async (id: string) =>
    await fetchRequest<void>(`${TRAFFIC_STATS_ENDPOINT}/${id}`, { method: "DELETE" }),
};
