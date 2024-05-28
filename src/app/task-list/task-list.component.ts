import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  template: ` <h2>Tareas</h2> 
  <input #taskInput type="text" placeholder="Nueva tarea">
  <button (click)="addTask(taskInput.value); taskInput.value=''"> Añadir Tarea</button>

  @for(task of tasks; track task){
    <li>{{task}}</li>
  }

  
  
  
  `,
  styles: ``,
})
export class TaskListComponent implements OnInit {
  tasks: string[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask(task: string) {
    this.taskService.addTask(task);
  }

  deleteTask(task: string) {
    this.taskService.deleteTask(task);
  }
}
