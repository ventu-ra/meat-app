import { Component, OnInit, output } from "@angular/core";
import { NgFor } from "@angular/common";

@Component({
    selector: "mt-rating",
    templateUrl: "./rating.component.html",
    imports: [NgFor]
})
export class RatingComponent implements OnInit {
  
  readonly rated = output<number>();

  rates: number[] = [1, 2, 3, 4, 5];

  rate: number = 0;

  previousRate: number;

  constructor() {}

  ngOnInit() {}

  setRate(r: number) {
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }
  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
