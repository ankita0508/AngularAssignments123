import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReviewTitleComponent } from './review-title/review-title.component';
import { ReviewsContainerComponent } from './reviews-container/reviews-container.component';



@NgModule({
  declarations: [
    ReviewsContainerComponent,
    ReviewComponent,
    ReviewTitleComponent,
    ReviewDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FirstAssignmentModule {
 }
