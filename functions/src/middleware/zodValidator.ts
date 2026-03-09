import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { treeifyError, ZodType } from "zod";

export const zodValidatorMiddleware =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const { data, success, error } = schema.safeParse(req.body);

    if (!success) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: "Invalid request body",
        details: treeifyError(error),
      });
    }

    req.body = data;
    return next();
  };
