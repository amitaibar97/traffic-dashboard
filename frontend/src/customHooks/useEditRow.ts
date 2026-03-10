import { useState } from "react";
import { type TrafficStatInput } from "../../../shared/schemas/trafficZodMiddleware";

export const useEditRow = () => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<TrafficStatInput>({
    date: "",
    visits: 0,
  });

  const startEdit = (id: string, data: TrafficStatInput) => {
    setEditingId(id);
    setEditData(data);
  };

  const updateField = <K extends keyof TrafficStatInput>(
    key: K,
    value: TrafficStatInput[K],
  ) => setEditData((prev: TrafficStatInput) => ({ ...prev, [key]: value }));

  return {
    editingId,
    editData,
    startEdit,
    cancelEdit: () => setEditingId(null),
    updateField,
  };
};
