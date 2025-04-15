import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../interfaces/restaurant';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  title? = '';
  route: ActivatedRoute = inject(ActivatedRoute);
  restaurantService = inject(RestaurantService);

  restaurant: Restaurant | undefined;

  constructor() {
    const restaurantId = Number(this.route.snapshot.params['id']);

    this.restaurantService
      .getRestaurantById(restaurantId)
      .then((restaurant) => {
        this.restaurant = restaurant;
      });
    this.title = this.restaurant?.name;
  }
}
