import { LoggedInGuard } from "./security/loggedin.guard";
import { LoginComponent } from "./security/login/login.component";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "login/:to", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "restaurants/:id",
    component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
  { path: "restaurants", component: RestaurantsComponent },
  {
    path: "order",
    loadChildren: () =>
      import("./order/order.module").then((m) => m.OrderModule),
    // canLoad: [LoggedInGuard],
    // canActivate: [LoggedInGuard],
  },
  { path: "order-summary", component: OrderSummaryComponent },
  {
    path: "about",
    loadChildren: () =>
      import("./about/about.module").then((m) => m.AboutModule),
  },
  { path: "**", component: NotFoundComponent },
];
