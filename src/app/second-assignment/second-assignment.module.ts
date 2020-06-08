import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorGeneratorComponent } from './color-generator/color-generator.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [ColorGeneratorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecondAssignmentModule { }
