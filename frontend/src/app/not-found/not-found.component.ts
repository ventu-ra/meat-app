import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "mt-not-found",
    templateUrl: "./not-found.component.html",
    imports: [RouterLink]
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
