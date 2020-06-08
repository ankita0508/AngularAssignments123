import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstAssignmentModule } from './first-assignment/first-assignment.module';
import { ThirdAssignmentModule } from './third-assignment/third-assignment.module';
import { AssignmentService } from './services/assignment.service';
import { SecondAssignmentModule } from './second-assignment/second-assignment.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FirstAssignmentModule,
    SecondAssignmentModule,
    ThirdAssignmentModule
  ],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
