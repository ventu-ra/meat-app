import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DetailComponent } from './restaurants/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    title: 'Restaurants',
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    title: 'Restaurant - Detail',
  },
];
