import { MEAT_API } from "../../app.api";
import { Observable } from "rxjs";
import { NavigationEnd, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { tap, filter } from "rxjs/operators";

import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class LoginService {
  user: User;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => (this.lastUrl = e.url));
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${MEAT_API}/login`, {
        email: email,
        password: password,
      })
      .pipe(tap((user) => (this.user = user)));
  }

  logout() {
    this.user = undefined;
  }

  handleLogin(path?: string) {
    this.router.navigate(["/login", btoa(path)]);
  }
}
