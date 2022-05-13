import { MenuItemDetailsComponent } from './../menu/menu-item-details/menu-item-details.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ReceiveOrderWayComponent } from './receive-order-way/receive-order-way.component';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ChooseBranchComponent } from './choose-branch/choose-branch.component';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent },
  { path: "edit/:id", component: MenuItemDetailsComponent },
  { path: 'branches', component: ChooseBranchComponent },
  { path: 'receivingOrderWay', component: ReceiveOrderWayComponent },
  { path: 'paymentMethod', component: PaymentMethodComponent },
  { path: 'customerInfo', component: CustomerInformationComponent },
  { path: 'creditCardDetails', component: CreditCardDetailsComponent },
  { path: 'orderSummary', component: OrderSummaryComponent }
]

@NgModule(
  {
    imports:
      [RouterModule.forChild(routes)],
    exports:
      [RouterModule]
  }
)
export class ShoppingCartRouting {

}
