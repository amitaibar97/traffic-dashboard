import { useState } from "react";
import {
  type SortField,
  type SortDirection,
} from "../types/traffic";
import { SORT_DIRECTIONS, TRAFFIC_FIELDS } from "../constants/traffic";
import type { TrafficStat } from "../../../shared/schemas/trafficZodMiddleware";

export const useTableSort = (data: TrafficStat[]) => {
  const [sortField, setSortField] = useState<SortField>(TRAFFIC_FIELDS.DATE);
  const [sortDirection, setSortDirection] = useState<SortDirection>(SORT_DIRECTIONS.ASC);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === SORT_DIRECTIONS.ASC ? SORT_DIRECTIONS.DESC : SORT_DIRECTIONS.ASC));
    } else {
      setSortField(field);
      setSortDirection(SORT_DIRECTIONS.ASC);
    }
  };

  const sorted = [...data].sort((a, b) => {
    const valA = sortField === TRAFFIC_FIELDS.VISITS ? a.visits : a.date;
    const valB = sortField === TRAFFIC_FIELDS.VISITS ? b.visits : b.date;
    if (valA < valB) return sortDirection === SORT_DIRECTIONS.ASC ? -1 : 1;
    if (valA > valB) return sortDirection === SORT_DIRECTIONS.ASC ? 1 : -1; //todo
    return 0;
  });

  const sortIcon = (field: SortField) => {
    if (sortField !== field) return "↕";
    return sortDirection === SORT_DIRECTIONS.ASC ? "↑" : "↓";
  };

  return { sorted, handleSort, sortIcon };
};
