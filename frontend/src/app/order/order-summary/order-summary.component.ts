import { Component, OnInit } from "@angular/core";
import { RatingComponent } from "../../shared/rating/rating.component";
import { NgIf } from "@angular/common";

@Component({
  selector: "mt-order-summary",
  templateUrl: "./order-summary.component.html",
  imports: [RatingComponent, NgIf],
})
export class OrderSummaryComponent implements OnInit {
  rated: boolean;

  constructor() {}

  ngOnInit() {}

  rate() {
    this.rated = true;
  }
}
