import {Component, OnInit} from "@angular/core"

@Component({
    selector: 'mt-app',
    templateUrl: 'app.component.html',
    standalone: false
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
