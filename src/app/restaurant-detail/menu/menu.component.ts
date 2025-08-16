import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Observable } from "rxjs";
import { MenuItem } from "../menu-item/menu-item.model";
import { NgFor, AsyncPipe, CommonModule } from "@angular/common";
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { map } from 'rxjs/operators';

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
  imports: [
    CommonModule,
    MenuItemComponent,
    ShoppingCartComponent,
    RouterModule,
  ],
})
export class MenuComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  restaurant: Observable<Restaurant>;

  restaurantsService: RestaurantsService = inject(RestaurantsService);

  menuItens: Observable<MenuItem[]>;

  constructor() {
    const restaurantId = this.route.parent?.snapshot.params["id"];

    this.menuItens = this.restaurantsService.menuOfRestaurant(restaurantId)
      .pipe(map((restaurant: Restaurant) => restaurant.menuItens));
  }
}
