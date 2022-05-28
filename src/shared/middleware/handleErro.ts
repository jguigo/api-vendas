import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export default (
   error: Error,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   if (error instanceof AppError) {
      return res.status(error.codeStatus).json({
         status: "error",
         message: error.message,
      });
   }

   return res.status(500).json({
      status: "erro",
      message: "Internal server error",
   });
};
