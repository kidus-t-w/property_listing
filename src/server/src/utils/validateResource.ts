import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError, custom } from "zod";

// Curring is a technique to pass arguments between function, instead of creating a large function with many arguments.
// Something like this ....
const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({ body: req.body, params: req.params });
      return next();
    } catch (error: any) {
      // Figure out a better way to do this
      const e = error as ZodError;

      // TODO: why is the type of value not know for each ZodError
      const customErrors = e.errors.map((value) => {
        const path = value.path[1];
        const message = value.message;
        return {
          [path]: message,
        };
      });

      return res.status(400).json({
        errors: customErrors,
      });
    }
  };

export default validateResource;
