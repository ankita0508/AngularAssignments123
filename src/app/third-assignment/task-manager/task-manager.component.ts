import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  allPendingTasks = [];
  allCompletedTasks = [];
  todos: any;

  txtAddItem;

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.allPendingTasks = this.assignmentService.getPendingTasks();
    /*this.assignmentService.getPendingTasks().subscribe((data) => {
      this.todos = data;
    });

    var counter = 0;
    for(let todo of this.todos){
      counter++;

      var title = todo.title;
      console.log(title);

      if(counter == 10){
        break;
      }
    }*/

    this.allCompletedTasks = this.assignmentService.getCompletedTasks();
  }

  @ViewChild('taskInput') taskInput: ElementRef;
  setFocus(){
    this.taskInput.nativeElement.focus();
  }

  addItem(){
    if(this.txtAddItem !== ""){
      this.allPendingTasks.push({task: this.txtAddItem});
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
