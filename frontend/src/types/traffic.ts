import type { TrafficStatInput } from "../../shared/schemas/trafficZodMiddleware";
import {
  TRAFFIC_FIELDS,
  SORT_DIRECTIONS,
  VIEW_MODES,
} from "../constants/traffic";

export type TrafficField = (typeof TRAFFIC_FIELDS)[keyof typeof TRAFFIC_FIELDS];
export type SortDirection =
  (typeof SORT_DIRECTIONS)[keyof typeof SORT_DIRECTIONS];
export type ViewMode = (typeof VIEW_MODES)[keyof typeof VIEW_MODES];

export type SortField = TrafficField;

export type TrafficStatInputType = TrafficStatInput[keyof TrafficStatInput];
