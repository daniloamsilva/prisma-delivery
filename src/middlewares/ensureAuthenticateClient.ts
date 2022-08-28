import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing.",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      process.env.APP_CLIENT_SECRET as string
    ) as IPayload;
    request.client_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid token.",
    });
  }
}
