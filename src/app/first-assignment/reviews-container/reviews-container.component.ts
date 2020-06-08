import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reviews-container',
  templateUrl: './reviews-container.component.html',
  styleUrls: ['./reviews-container.component.scss']
})
export class ReviewsContainerComponent implements OnInit {

  constructor() { }
  Cards: number[] = [];
  dummy: string;

  @Output() Reviews = [];

  ngOnInit(): void {
    this.Cards.push(1);
    this.Cards.push(1);
    this.Cards.push(1);
    this.dummy = "dummy"
    this.Reviews = [
      { Title: "Title 1", Description:
        [
          { ProfilePicture: "../../assets/firstAssignment/mickeymouse.jfif", ReviewDescription: "Description 1", Action:
            [
              { Author: "Author 1", Engagement: "1" }
            ]
          }
        ]
      },
      { Title: "Title 2", Description:
        [
          { ProfilePicture: "../../assets/firstAssignment/mickeymouse.jfif", ReviewDescription: "Description 2", Action:
            [
              { Author: "Author 2", Engagement: "1" }
            ]
          }
        ]
      },
      { Title: "Title 3", Description:
        [
          { ProfilePicture: "../../assets/firstAssignment/mickeymouse.jfif", ReviewDescription: "Description 3", Action:
            [
              { Author: "Author 3", Engagement: "1" }
            ]
          }
        ]
      }
    ];
  }

}
