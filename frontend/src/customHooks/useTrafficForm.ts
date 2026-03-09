import { useState } from "react";
import z from "zod";
import {
  TrafficStatInputSchema,
  type TrafficStatInput,
} from "../../../shared/schemas/trafficZodMiddleware";

const INITIAL_STATE: TrafficStatInput = { date: "", visits: 0 };

export const useTrafficForm = (onSubmit: (data: TrafficStatInput) => void) => {
  const [formData, setFormData] = useState<TrafficStatInput>(INITIAL_STATE);
  const [error, setError] = useState("");

  const updateField = <K extends keyof TrafficStatInput>(
    key: K,
    value: TrafficStatInput[K],
  ) => setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const parsed = TrafficStatInputSchema.safeParse(formData);
   
    if (!parsed.success) {
      setError(
        `Please fill in all fields correctly- ${z.treeifyError(parsed.error).errors.join(", ")}`,
      );
      return;
    }
    onSubmit(formData);
    setFormData(INITIAL_STATE);
  };

  return { formData, error, updateField, handleSubmit };
};
