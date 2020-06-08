import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsContainerComponent } from './first-assignment/reviews-container/reviews-container.component';
import { TaskManagerComponent } from './third-assignment/task-manager/task-manager.component';
import { ColorGeneratorComponent } from './second-assignment/color-generator/color-generator.component';

const routes: Routes = [
  {path:"reviewContainer", component:ReviewsContainerComponent},
  {path:"taskManager", component:TaskManagerComponent},
  {path:"colorGenerator", component:ColorGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
