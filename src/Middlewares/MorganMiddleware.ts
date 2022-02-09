import morgan from "morgan";
import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";

export class MorganMiddleware implements AppMiddlewareInterface {
  getMiddleware(): any {
    return morgan("dev");
  }
}
