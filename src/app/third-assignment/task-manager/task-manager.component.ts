import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';
import { ToDos } from 'src/app/models/ToDos.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  allPendingTasks = [];
  allCompletedTasks = [];
  allToDos: ToDos[] = [];
  pendingTasks: ToDos[]= [];
  completedTasks: ToDos[] = [];


  txtAddItem;

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    //this.allPendingTasks = this.assignmentService.getPendingTasks();
    //this.allCompletedTasks = this.assignmentService.getCompletedTasks();
    this.getAllToDos();
  }

  onSubmit(myForm: NgForm) {

    console.log(myForm.value['toDo']);
    var todo: ToDos = <ToDos>{};
    if(myForm.value['toDo'] !== ""){
      //this.allPendingTasks.push({task: this.txtAddItem});

      todo.id = null;
      todo.name = myForm.value['toDo'];
      todo.isPending = true;
      todo.isActive = true;
      //this.assignmentService.currentToDo = Object.assign({}, todo);
      console.log(todo);

      this.assignmentService.createToDo(todo).subscribe((data: ToDos) => {

        this.getAllToDos();
      }, error => {
        //console.log(error);
      });

      myForm.value['toDo'] = "";
    }

  }

  getAllToDos() {
    this.assignmentService.getAllToDos().subscribe((data) =>
    {
      this.allToDos = data;
      for(let todo in this.allToDos){
        if(this.allToDos[todo].isActive){
          if(this.allToDos[todo].isPending){
            this.pendingTasks.push(this.allToDos[todo]);
          }else{
            this.completedTasks.push(this.allToDos[todo]);
          }
        }
      }

    }, error => {
      //console.log(error);
    });
  }

  deleteToDo(id: number){
    this.assignmentService.deleteToDo(id).subscribe((todo: ToDos) => {
      //console.log(todo.name + "is deleted!!");
    }, error => {
      //console.log(error);
    })
  }

  markAsCompleted(todo: ToDos){
    todo['isPending'] = false;
    this.assignmentService.markAsCompleted(todo).subscribe((todo: ToDos) => {
    }, error => {
      //console.log(error);
      //alert(error);
    })
  }

  @ViewChild('taskInput') taskInput: ElementRef;
  setFocus(){
    this.taskInput.nativeElement.focus();
  }

  addItem(){
    var todo: ToDos = <ToDos>{};
    if(this.txtAddItem !== ""){
      //this.allPendingTasks.push({task: this.txtAddItem});

      todo.id = null;
      todo.name = this.txtAddItem;
      todo.isPending = true;
      todo.isActive = true;
      //this.assignmentService.currentToDo = Object.assign({}, todo);
      //console.log(todo);

      this.assignmentService.createToDo(todo).subscribe((data: ToDos) => {
        //alert("suceess" + data.name);
      }, error => {
        //console.log(error);
      });

      this.txtAddItem = "";
    }
  }

  completedItem(item){
      console.log(item);
      for(var i = 0;i < this.allPendingTasks.length; i++){
        if(this.allPendingTasks[i]["task"] == item){
          this.allPendingTasks.splice(i, 1);
          this.allCompletedTasks.push({task: item});
        }
      }
  }

  deleteItem(item){
    for(var i = 0;i < this.allCompletedTasks.length; i++){
      if(this.allCompletedTasks[i]["task"] == item){
        this.allCompletedTasks.splice(i, 1);
      }
    }
  }
}
