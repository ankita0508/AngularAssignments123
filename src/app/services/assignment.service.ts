import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDos } from '../models/ToDos.model';

const baseUrl = "http://localhost:3000/ToDos";

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  getAllToDos(){
    return this.http.get<ToDos[]>(baseUrl);
  }

  deleteToDo(Id: number){
    return this.http.delete<ToDos>(baseUrl + '/' + Id);
  }

  markAsCompleted(todo: ToDos){
    return this.http.put<ToDos>(baseUrl + '/' + todo.id, todo);
  }

  createToDo(todo){
    return this.http.post(baseUrl, todo);
  }

  getPendingTasks(){
  //return this.http.get("https://jsonplaceholder.typicode.com/todos");
  return[
    {task: "Pending Task 1"},
    {task: "Pending Task 2"},
    {task: "Pending Task 3"}
  ];
  }

  getCompletedTasks(){
    return[
      {task: "Completed 1"},
      {task: "Completed 2"},
      {task: "Completed 3"}
    ];
  }

}
