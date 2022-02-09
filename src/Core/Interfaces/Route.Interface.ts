import { IRouter } from "express";

export interface RouteInterface {
  getRouter(): IRouter;

  getPath(): string;
}
