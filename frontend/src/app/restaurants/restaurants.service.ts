import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";

import { Restaurant } from "./restaurant/restaurant.model";
//import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantsService {
  private readonly API = "api/v1/restaurant";
  constructor(private http: HttpClient) {}

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined;

    if (search) {
      params = new HttpParams().append("q", search);
    }
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurant`, {
      params: params,
    });
  }

  getRestaurantDetails(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurant/${id}`);
  }
}
