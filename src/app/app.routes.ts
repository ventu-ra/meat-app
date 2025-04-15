import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './components/menu/menu.component';

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
    path: 'menu/:id',
    component: MenuComponent,
    title: 'Restaurant - Menu',
  },
];
