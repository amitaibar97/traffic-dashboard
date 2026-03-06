import {
  TrafficStatInput,
  TrafficStatRepo,
  TrafficStat,
} from "../repositories/trafficStats.repo";

export interface TrafficStatsService {
  getAll: () => Promise<TrafficStat[]>;
  create: (data: TrafficStatInput) => Promise<TrafficStat>;
  update: (id: string, data: TrafficStatInput) => Promise<TrafficStat>;
  remove: (id: string) => Promise<{ id: string }>;
}

export const createTrafficStatsService = (
  repo: TrafficStatRepo
): TrafficStatsService => ({
  getAll: () => repo.getAll(),

  create: async (data) => {
    if (!data.date || data.visits === undefined) {
      throw new Error("date and visits are required");
    }
    const id = await repo.add(data);
    return { id, ...data };
  },

  update: async (id, data) => {
    await repo.update(id, data);
    return { id, ...data };
  },

  remove: async (id) => {
    await repo.remove(id);
    return { id };
  },
});
