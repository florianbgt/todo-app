import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  name = ''
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  
  faPlus = faPlus
  
  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.name !== '') {
      this.submit.emit(this.name);
      this.name = ''
    }
  }

  ngOnInit(): void {
  }

}
