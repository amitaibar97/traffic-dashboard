import { Request, Response, NextFunction } from "express";
import { treeifyError, ZodType } from "zod";

export const validate =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const { data, success, error } = schema.safeParse(req.body);

    if (!success) {
      res.status(400).json({
        error: "Invalid request body",
        details: treeifyError(error),
      });
      return;
    }

    req.body = data;
    next();
  };
