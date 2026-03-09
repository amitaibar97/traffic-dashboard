import { Router, Request, Response, NextFunction } from "express";
import { verifyTokenMiddleware } from "../middleware/auth";
import { TrafficStatsService } from "../services/trafficStats.service";
import { normalizeId } from "../utils/normalizeId";
import { zodValidatorMiddleware } from "../middleware/validate";
import { TrafficStatInputSchema } from "../../../shared/schemas/trafficZodMiddleware";
import { requireEditorRole } from "../middleware/role";

export const createTrafficStatsRouter = (
  service: TrafficStatsService
): Router => {
  const router = Router();

  router.get(
    "/",
    verifyTokenMiddleware,
    async (_req: Request, res: Response, next: NextFunction) => {
      try {
        const data = await service.getAll();
        res.json(data);
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    "/",
    verifyTokenMiddleware,
    requireEditorRole(),
    zodValidatorMiddleware(TrafficStatInputSchema),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await service.create(req.body);
        res.status(201).json(result);
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    "/:id",
    verifyTokenMiddleware,
    requireEditorRole(),
    zodValidatorMiddleware(TrafficStatInputSchema),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = normalizeId(req.params.id);
        const result = await service.update(id, req.body);
        res.json(result);
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    "/:id",
    verifyTokenMiddleware,
    requireEditorRole(),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = normalizeId(req.params.id);
        await service.remove(id);
        res.status(204).send();
      } catch (error) {
        next(error);
      }
    }
  );

  return router;
};
