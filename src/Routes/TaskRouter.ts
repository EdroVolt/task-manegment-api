import { RouteInterface } from "../Core/Interfaces/Route.Interface";
import express, { IRouter } from "express";
import {
  AllTasks,
  CreateTask,
  DeleteTask,
  UpdateTask,
} from "../Controllers/TaskController";

export class TaskRouter implements RouteInterface {
  getPath(): string {
    return "/api/tasks";
  }

  getRouter(): IRouter {
    const route = express.Router();

    route.get("/", AllTasks);
    route.post("/", CreateTask);
    route.put("/:id", UpdateTask);
    route.delete("/:id", DeleteTask);

    return route;
  }
}
