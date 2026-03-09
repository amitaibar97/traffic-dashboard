import { TRAFFIC_STATS_COLLECTION } from "./constants";
import { getDb } from "./lib/firestore";
import { createFirestoreTrafficStatRepo } from "./repositories/trafficStats.repo";
import { createTrafficStatsService } from "./services/trafficStats.service";

export const createAppContainer = () => { 
  const collection = getDb(TRAFFIC_STATS_COLLECTION);
  const trafficStatRepo = createFirestoreTrafficStatRepo(collection);
  const trafficStatService = createTrafficStatsService(trafficStatRepo);
  return { trafficStatService };
};
