import { ApplicationErrorHandler } from "./app.error-handler";

import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LOCALE_ID, NgModule, ErrorHandler } from "@angular/core";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { PreloadAllModules, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

import { ROUTES } from "./app.routes";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";

import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ShoppingCartComponent } from "./restaurant-detail/shopping-cart/shopping-cart.component";
import { MenuItemComponent } from "./restaurant-detail/menu-item/menu-item.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";

import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from "@angular/common";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import locatePt from "@angular/common/locales/pt";

registerLocaleData(locatePt, "pt");
import { LoginComponent } from "./security/login/login.component";
import { UserDetailComponent } from "./header/user-detail/user-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    SharedModule.forRoot(),
    // CoreModule,
    HttpClientModule,
    //configuração das rotas
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: "pt-BR" },
    { provide: ErrorHandler, useClass: ApplicationErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
