import cors from "cors";
import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";

export class CorsMiddleware implements AppMiddlewareInterface {
  getMiddleware(): any {
    return cors({ origin: "*" });
  }
}
