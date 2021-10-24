import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksUrl = 'http://localhost:8000/api/tasks/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  addTask(name: Object): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, name, this.httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(
      this.tasksUrl + `${task.id}/`,
      task,
      this.httpOptions
    );
  }

  deleteTask(id: Number): Observable<Task> {
    return this.http.delete<Task>(this.tasksUrl + `${id}/`, this.httpOptions);
  }

  constructor(private http: HttpClient) {}
}
