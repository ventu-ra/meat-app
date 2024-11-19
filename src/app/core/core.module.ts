import { OrderService } from "./../order/order.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { ShoppingCartServices } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { NgModule } from "@angular/core";


@NgModule({
  providers: [ShoppingCartServices, RestaurantsService, OrderService],
})
export class CoreModule {}
