import type { TrafficStatInput } from "../../../shared/schemas/trafficZodMiddleware";
import { VIEW_MODES } from "../constants/traffic";
import { type ViewMode } from "../types/traffic";

const getWeekKey = (date: Date): string => {
  const start = new Date(date);
  start.setDate(date.getDate() - date.getDay());
  return start.toISOString().slice(0, 10);
};

const getMonthKey = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

const groupAndSum = (
  data: TrafficStatInput[],
  getKey: (date: Date) => string,
): TrafficStatInput[] => {
  const map = new Map<string, number>();

  data.forEach(({ date, visits }) => {
    const key = getKey(new Date(date));
    map.set(key, (map.get(key) ?? 0) + visits);
  });

  return Array.from(map.entries())
    .map(([date, visits]) => ({ date, visits }))
    .sort((a, b) => a.date.localeCompare(b.date));
};

export const aggregateData = (
  data: TrafficStatInput[],
  mode: ViewMode,
): TrafficStatInput[] => {
  switch (mode) {
    case VIEW_MODES.DAILY:
      return data;
    case VIEW_MODES.WEEKLY:
      return groupAndSum(data, getWeekKey);
    case VIEW_MODES.MONTHLY:
      return groupAndSum(data, getMonthKey);
  }
};
