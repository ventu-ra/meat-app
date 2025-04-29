import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { NgIf } from "@angular/common";

@Component({
    selector: "mt-restaurant-detail",
    templateUrl: "./restaurant-detail.component.html",
    imports: [NgIf, RouterLinkActive, RouterLink, RouterOutlet]
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.restaurantsService
      .restaurantById(this.route.snapshot.params["id"])
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
}
