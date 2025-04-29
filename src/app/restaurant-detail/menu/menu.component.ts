import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Observable } from "rxjs";
import { MenuItem } from "../menu-item/menu-item.model";
import { NgFor, AsyncPipe } from "@angular/common";
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";

@Component({
    selector: "mt-menu",
    templateUrl: "./menu.component.html",
    imports: [NgFor, MenuItemComponent, ShoppingCartComponent, AsyncPipe]
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(
      this.route.parent.snapshot.params["id"]
    );
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
