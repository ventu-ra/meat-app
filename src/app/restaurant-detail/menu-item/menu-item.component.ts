import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit, input, output } from "@angular/core";
import { MenuItem } from "./menu-item.model";
import { CurrencyPipe } from "@angular/common";

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
    imports: [CurrencyPipe],
})
export class MenuItemComponent implements OnInit {
  menuItemState = "ready";

  readonly menuItem = input<MenuItem>(undefined);
  readonly add = output();

  constructor() {}

  ngOnInit() {}

  emitAddEvent() {
    this.add.emit();
  }
}
