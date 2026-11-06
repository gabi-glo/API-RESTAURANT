import { NextFunction, Request, Response } from "express"

export class ProductController {
    async index(request: Request, response: Response, next: NextFunction) {
      try {
         response.json({ message: "ok"});
         return;
      }catch (error) {
        next(error) ; 
      }
    }
}

//export { ProductController }