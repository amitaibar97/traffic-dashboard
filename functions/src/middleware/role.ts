import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const EDITOR_UIDS = process.env.EDITOR_UIDS?.split(",") ?? [];

export const editorRoleValidatorMiddleware =
  () => (req: Request, res: Response, next: NextFunction) => {
    const uid = req.user?.uid;
    if (!EDITOR_UIDS.includes(uid ?? "")) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ error: "Forbidden: editor access required" });
    }

    return next();
  };
