import { Request, Response } from "express";
import { TaskService } from "../Services/TaskService";

const taskService = new TaskService();

export function AllTasks(req: Request, res: Response) {
  res.json({ tasks: taskService.readAll() });
}

export function CreateTask(req: Request, res: Response) {
  try {
    let title = req.body.title;
    let description = req.body.description;

    let message = taskService.create({
      title,
      description,
    });

    return res.send({ message });
  } catch (e: any) {
    return res.status(404).send({ message: e.message });
  }
}

export function DeleteTask(req: Request, res: Response) {
  try {
    let id = req.params.id;

    let message = taskService.delete({ id });

    return res.send({ message });
  } catch (e: any) {
    return res.status(404).send({ message: e.message });
  }
}

export function UpdateTask(req: Request, res: Response) {
  try {
    let id = req.params.id;
    let title = req.body.title;
    let description = req.body.description;

    let message = taskService.update({
      id,
      task: { title, description },
    });

    return res.send({ message });
  } catch (e: any) {
    return res.status(404).send({ message: e.message });
  }
}
