import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  name = ''
  
  faPlus = faPlus
  
  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.name !== '') {
      this.taskService.addTask({'name': this.name, 'done': false}).subscribe()
      this.name = ''
    }
  }

  ngOnInit(): void {
  }

}
