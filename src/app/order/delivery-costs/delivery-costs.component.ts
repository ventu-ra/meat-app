import { Component, OnInit, input } from "@angular/core";
import { CurrencyPipe } from "@angular/common";

@Component({
    selector: "mt-delivery-costs",
    templateUrl: "./delivery-costs.component.html",
    imports: [CurrencyPipe]
})
export class DeliveryCostsComponent implements OnInit {
  readonly delivery = input<number>(undefined);
  readonly itemsValue = input<number>(undefined);

  constructor() {}

  ngOnInit() {}

  total(): number {
    return this.delivery() + this.itemsValue();
  }
}
