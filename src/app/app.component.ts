import {Component, OnInit} from "@angular/core"
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from "@angular/router";
import { SnackbarComponent } from "./shared/messages/snackbar/snackbar.component";

@Component({
    selector: 'mt-app',
    templateUrl: 'app.component.html',
    imports: [HeaderComponent, RouterOutlet, SnackbarComponent]
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
