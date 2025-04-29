import { Component, inject } from "@angular/core";
import {
  ActivatedRoute,
  RouterLinkActive,
  RouterLink,
  RouterOutlet,
} from "@angular/router";
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "mt-restaurant-detail",
  templateUrl: "./restaurant-detail.component.html",
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterOutlet],
})
export class RestaurantDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  restaurant: Restaurant;
  private restaurantService = inject(RestaurantsService);

  constructor() {
    const restaurantId = this.route.snapshot.params["id"];
    this.restaurantService
      .restaurantById(restaurantId)
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
}
