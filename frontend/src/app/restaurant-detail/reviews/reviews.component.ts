import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Observable } from "rxjs";
import { AsyncPipe, DatePipe, CommonModule } from "@angular/common";
import { Restaurant, Reviews } from "app/restaurants/restaurant/restaurant.model";
import { map } from 'rxjs/operators';

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html",
  imports: [CommonModule, AsyncPipe, DatePipe],
})
export class ReviewsComponent {
  //  reviews: Observable<any>;
  route: ActivatedRoute = inject(ActivatedRoute);

  restaurantsService: RestaurantsService = inject(RestaurantsService);
  restaurant: Observable<Restaurant>;
  reviews: Observable<Reviews[]>;

  constructor() {
    const restaurantId = this.route.parent?.snapshot.params["id"];

    this.reviews = this.restaurantsService.getRestaurantDetails(restaurantId)
      .pipe(map((restaurant: Restaurant) => restaurant.reviews));
  }


}
