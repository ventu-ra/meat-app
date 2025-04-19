import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

// import { MEAT_API } from "app/app.api";
import { Observable, throwError } from "rxjs";

import { Restaurant } from "./restaurant/restaurant.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
@Injectable()
export class RestaurantsService {
  private restaurantUrl = "api/restaurants";
  private reviewsUrl = "api/reviews"; // ✅ Adiciona isso

  constructor(private http: HttpClient) {}

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;
    if (search) {
      params = new HttpParams().append("q", search);
    }
    return this.http.get<Restaurant[]>(this.restaurantUrl, { params });
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    let result = this.http.get<MenuItem[]>(`api/menu?restaurantId=${id}`);

    result.subscribe((data) => {
      console.log("Menu items:", data); // <-- aqui você vê o array real
    });

    return result;
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.restaurantUrl}/${id}`);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${this.reviewsUrl}?restaurantId=${id}`); // ✅ Aqui usamos o novo reviewsUrl
  }
}
