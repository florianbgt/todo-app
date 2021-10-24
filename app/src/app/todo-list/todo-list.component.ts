import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  filter = 'All';
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  addTask(name: string): void {
    this.taskService.addTask({ name: name, done: false }).subscribe(
      (task) => {
        this.tasks = [...this.tasks, task];
        this.filterTasks();
      },
      (error) => {
        console.log(error)
      }
    );
  }

  deleteTask(id: Number): void {
    this.taskService.deleteTask(id).subscribe(
      () => {
        this.tasks = this.tasks.filter(
          (task) => task.id != id
        );
        this.filterTasks();
      },
      (error) => {
        console.log(error)
      }
    );
  }

  updateTask(task: any): void {
    this.taskService.updateTask(task).subscribe(
      (task) => {
        const index = this.tasks.findIndex((obj => obj.id === task.id))
        this.tasks[index] = task
      },
      (error) => {
        console.log(error)
      }
    );
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(
      (tasks) => {
        this.tasks = tasks;
        this.filterTasks();
      },
      (error) => {
        console.log(error)
      }
    );
  }

  filterTasks(): void {
    if (this.filter === 'Only Done') {
      this.filteredTasks = this.tasks.filter((task) => task.done);
    } else if (this.filter === 'Only To Do') {
      this.filteredTasks = this.tasks.filter((task) => !task.done);
    } else {
      this.filteredTasks = this.tasks;
    }
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
