import { Request, Response, NextFunction } from "express";
import { getAuth } from "firebase-admin/auth";

export const verifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const token = authHeader.split("Bearer ")[1];
  try {
    const decoded = await getAuth().verifyIdToken(token);
    req.user = decoded;
    return next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
};
