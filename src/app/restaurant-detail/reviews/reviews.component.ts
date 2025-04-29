import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Observable } from "rxjs";
import { AsyncPipe, DatePipe, CommonModule } from "@angular/common";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html",
  imports: [CommonModule, AsyncPipe, DatePipe],
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(
      this.route.parent.snapshot.params["id"]
    );
  }
}
