export default class Task {
  static count: number = 0;

  id: number;
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;

    // auto incremented id
    this.id = ++Task.count;
  }
}
