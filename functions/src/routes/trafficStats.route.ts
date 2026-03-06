import { Router, Request, Response } from 'express';
import { verifyToken } from '../middleware/auth';
import { TrafficStatsService } from '../services/trafficStats.service';
import { normalizeId } from '../utils/normalizeId';

export const createTrafficStatsRouter = (
  service: TrafficStatsService
): Router => {
  const router = Router();

  router.get('/', verifyToken, async (_req: Request, res: Response) => {
    const data = await service.getAll();
    res.json(data);
  });

  router.post('/', verifyToken, async (req: Request, res: Response) => {
    try {
      const result = await service.create(req.body);
      res.status(201).json(result);
    } catch (e: unknown) {
      res.status(400).json({ error: (e as Error).message });
    }
  });

  router.put('/:id', verifyToken, async (req: Request, res: Response) => {
    const id = normalizeId(req.params.id);
    const result = await service.update(id, req.body);
    res.json(result);
  });

  router.delete('/:id', verifyToken, async (req: Request, res: Response) => {
    const id = normalizeId(req.params.id);
    const result = await service.remove(id);
    res.json(result);
  });

  return router;
};
