import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [TaskManagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ThirdAssignmentModule { }
