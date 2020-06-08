import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-review-title',
  templateUrl: './review-title.component.html',
  styleUrls: ['./review-title.component.scss']
})
export class ReviewTitleComponent implements OnInit {

  constructor() { }
  @Input() Title: string;

  ngOnInit(): void {
  }

}
