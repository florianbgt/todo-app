import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task?: Task;

  @Output() emitDeleteTask = new EventEmitter<Number>();
  @Output() emitUpdateTask = new EventEmitter<Object>();

  editMode = false;

  faEdit = faEdit;
  faTrash = faTrash;
  faCheck = faCheck;

  constructor(private taskService: TaskService) {}

  updateTask(): void {
    if (this.task) {
      this.emitUpdateTask.emit(this.task);
      this.editMode = false;
    }
  }

  deleteTask(): void {
    if (this.task) {
      this.emitDeleteTask.emit(this.task.id);
    }
  }

  ngOnInit(): void {}
}
