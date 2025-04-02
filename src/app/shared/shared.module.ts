import { LeaveOrderGuard } from "./../order/leave-order.guard";
import { LoggedInGuard } from "./../security/loggedin.guard";
import { LoginService } from "./../security/login/login.service";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { RatingComponent } from "./rating/rating.component";
import { RadioComponent } from "./radio/radio.component";
import { InputComponent } from "./input/input.component";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingCartServices } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";
import { NotificationService } from "./messages/notification.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "app/security/auth.interceptor";

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    SnackbarComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        ShoppingCartServices,
        LoginService,
        RestaurantsService,
        OrderService,
        LeaveOrderGuard,
        NotificationService,
        LoggedInGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
    };
  }
}
