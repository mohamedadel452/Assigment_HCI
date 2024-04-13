import { Component } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { TaskServerService } from '../service/task-server.service';


@Component({
  selector: 'app-task-componant',
  templateUrl: './task-componant.component.html',
  styleUrl: './task-componant.component.css'
})
export class TaskComponantComponent {
  newTask: TaskInterface = {
    id: 0,
    name: '',
    description: '',
    dueDate: '',
    status: 'pending',
  };
  editingTask: TaskInterface | null = null;

  constructor(public tasksService: TaskServerService) {}

  ngOnInit(): void {}

  addTask(): void {
    if (!this.newTask.name) return;
    this.tasksService.addTask({ ...this.newTask });
    this.newTask = { id: 0, name: '', description: '', dueDate: '', status: 'pending' };
  }

  startEdit(task: TaskInterface): void {
    this.editingTask = { ...task };
  }

  saveEdit(): void {
    if (this.editingTask) {
      this.tasksService.updateTask(this.editingTask);
      this.editingTask = null;
    }
  }

  cancelEdit(): void {
    this.editingTask = null;
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id);
  }

  toggleStatus(task: TaskInterface): void {
    task.status = task.status === 'pending' ? 'completed' : 'pending';
    this.tasksService.updateTask(task);
  }

}
