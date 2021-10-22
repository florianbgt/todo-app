import { Component, OnInit, Input } from '@angular/core';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FalseLiteral } from 'typescript';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task?: Task;

  editMode = false;

  faEdit = faEdit;
  faTrash = faTrash;
  faCheck = faCheck;

  constructor(private taskService: TaskService) {}

  updateTask(): void {
    if (this.task) {
      this.taskService.updateTask(this.task).subscribe((task) => (this.task = task));
      this.editMode = false;
    }
  }

  checkTask(): void {
    if (this.task) {
      this.task.done = !this.task.done
      this.updateTask()
    }
  }

  ngOnInit(): void {}
}
