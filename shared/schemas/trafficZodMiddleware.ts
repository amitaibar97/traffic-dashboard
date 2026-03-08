import { z } from "zod";

export const TrafficStatInputSchema = z.object({
  date: z.string(),
  visits: z.number().positive(),
});

export const TrafficStatSchema = TrafficStatInputSchema.extend({
  id: z.string(),
});

export type TrafficStatInput = z.infer<typeof TrafficStatInputSchema>;
export type TrafficStat = z.infer<typeof TrafficStatSchema>;
