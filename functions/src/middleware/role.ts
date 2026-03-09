import { Request, Response, NextFunction } from "express";

const EDITOR_UIDS = process.env.EDITOR_UIDS?.split(",") ?? [];

export const requireEditorRole =
  () => (req: Request, res: Response, next: NextFunction) => {
    const uid = req.user?.uid;

    if (!EDITOR_UIDS.includes(uid ?? "")) {
      res.status(403).json({ error: "Forbidden: editor access required" });
      return;
    }

    next();
  };
