import Task from "../Data/Models/Task.Model";
import { TaskRepo } from "../Data/Repositories/TaskRepository";

let taskRepo = new TaskRepo();

export class TaskService {
  create(data: { title: string; description: string }) {
    let task = new Task(data.title, data.description);
    return taskRepo.insert(task);
  }

  readAll() {
    return taskRepo.findAll();
  }

  filter(data: { title: string | undefined; description: string | undefined }) {
    return taskRepo.search(data.title, data.description);
  }

  update(data: {
    id: string | number;
    task: { title: string; description: string };
  }) {
    return taskRepo.update(data.id, data.task);
  }

  delete(data: { id: string | number }) {
    return taskRepo.delete(data.id);
  }
}
