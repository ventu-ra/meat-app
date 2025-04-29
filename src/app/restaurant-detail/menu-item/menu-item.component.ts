import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem } from "./menu-item.model";

@Component({
    selector: "mt-menu-item",
    templateUrl: "./menu-item.component.html",
    animations: [
        trigger("menuItemAppeared", [
            state("ready", style({ opacity: 1 })),
            transition("void => ready", [
                style({ opacity: 0, transition: "translateY(-20px)" }),
                animate("900ms 0s ease-in"),
            ]),
        ]),
    ],
    standalone: false
})
export class MenuItemComponent implements OnInit {
  menuItemState = "ready";

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }
}
