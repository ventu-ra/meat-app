import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Observable } from "rxjs";
import { MenuItem } from "../menu-item/menu-item.model";
import { NgFor, AsyncPipe, CommonModule } from "@angular/common";
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
  imports: [
    CommonModule,
    MenuItemComponent,
    ShoppingCartComponent,
    AsyncPipe,
    RouterModule,
  ],
})
export class MenuComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  menu: Observable<MenuItem[]>;

  restaurantsService: RestaurantsService = inject(RestaurantsService);

  constructor() {
    this.menu = this.restaurantsService.menuOfRestaurant(
      this.route.parent.snapshot.params["id"]
    );
  }
}
