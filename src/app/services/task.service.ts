import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class TaskService {
  constructor() { }

  tasks: string[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks.push(task);
  }

  deleteTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
