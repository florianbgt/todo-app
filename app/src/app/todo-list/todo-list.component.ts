import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  getHeroes(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
