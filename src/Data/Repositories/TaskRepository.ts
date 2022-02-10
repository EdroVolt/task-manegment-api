import { tasks } from "../../Core/Database/staticDB";
import Task from "../Models/Task.Model";

export class TaskRepo {
  findAll(): Array<Task> | string {
    try {
      return tasks;
    } catch (e: any) {
      return e.message;
    }
  }

  search(title: string | undefined, description: string | undefined) {
    const task = tasks.find((task) => {
      if (title && !description) {
        return task.title === title;
      } else if (!title && description) {
        return task.description === description;
      }

      return task.title === title && task.description === description;
    });

    if (!task) return [];

    return [task];
  }

  insert(item: Task): string {
    try {
      tasks.push(item);
    } catch (e: any) {
      return e.message;
    }

    return "one record inserted";
  }

  delete(id: string | number): string {
    try {
      const taskIndex = tasks.findIndex((task) => task.id === +id);
      if (taskIndex === -1) {
        return "no such id";
      }
      tasks.splice(taskIndex, 1);
    } catch (e: any) {
      return e.message;
    }
    return "one record deleted";
  }

  update(
    id: string | number,
    item: { title: string; description: string }
  ): string {
    try {
      const task = tasks.find((task) => task.id === +id);

      if (!task) {
        return "no such id";
      }

      task.title = item.title || task.title;
      task.description = item.description || task.description;
    } catch (e: any) {
      return e.message;
    }
    return "one record updated";
  }
}
