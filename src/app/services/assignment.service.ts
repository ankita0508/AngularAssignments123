import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

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
