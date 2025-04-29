import { LeaveOrderGuard } from "./leave-order.guard";
import { SharedModule } from "./../shared/shared.module";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  { path: "", component: OrderComponent, canDeactivate: [LeaveOrderGuard] },
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(ROUTES), OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
})
export class OrderModule {}
