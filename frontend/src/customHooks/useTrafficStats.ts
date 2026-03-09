import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { trafficApi } from "../services/trafficApi";
import { trafficKeys } from "../services/trafficKeys";
import type { TrafficStatInput } from "../../../shared/schemas/trafficZodMiddleware";
import { useMemo } from "react";

export const useTrafficStats = () => {
  const queryClient = useQueryClient();

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: trafficKeys.all });

  const queryDetails = useQuery({
    queryKey: trafficKeys.all,
    queryFn: trafficApi.getAll,
  });

  const create = useMutation({
    mutationFn: trafficApi.create,
    onSuccess: invalidate,
  });

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: TrafficStatInput }) =>
      trafficApi.update(id, data),
    onSuccess: invalidate,
  });

  const remove = useMutation({
    mutationFn: trafficApi.delete,
    onSuccess: invalidate,
  });

  return useMemo(
    () => ({ queryData: queryDetails, create, update, remove }),
    [queryDetails, create, update, remove],
  );
};
