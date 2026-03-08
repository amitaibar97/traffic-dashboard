import { useState } from "react";
import type { TrafficStat } from "../../../shared/schemas/trafficZodMiddleware";

export const useTableFilter = (data: TrafficStat[]) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const filtered = data
    .filter((s) => (dateFrom ? s.date >= dateFrom : true))
    .filter((s) => (dateTo ? s.date <= dateTo : true));

  return {
    filtered,
    dateFrom,
    dateTo,
    onFromChange: setDateFrom,
    onToChange: setDateTo,
    onClear: () => {
      setDateFrom("");
      setDateTo("");
    },
    hasFilters: !!(dateFrom || dateTo),
  };
};
