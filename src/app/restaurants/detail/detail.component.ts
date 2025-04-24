import { Component, inject } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';
import { MenuItem } from '../../interfaces/menu-item';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-detail',
  imports: [MenuComponent],
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  id? = '';
  route: ActivatedRoute = inject(ActivatedRoute);
  restaurantService = inject(RestaurantService);
  menuItems: MenuItem[] = [];

  restaurant: Restaurant | undefined;
  rowState = 'ready';

  constructor() {
    const restaurantId = String(this.route.snapshot.params['id']);

    this.restaurantService
      .getRestaurantById(restaurantId)
      .then((restaurant) => {
        this.restaurant = restaurant;
      });
  }
}
