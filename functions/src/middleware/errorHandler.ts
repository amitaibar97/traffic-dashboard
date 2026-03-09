// middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    this.name = "AppError";
  }
}

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof Error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: err.message });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: "Internal server error" });
};
