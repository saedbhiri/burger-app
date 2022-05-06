import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartRouting } from './shopping-cart-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from "@angular/core";
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './shopping-cart-list/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartPaymentComponent } from './shopping-cart-list/shopping-cart-payment/shopping-cart-payment.component';
import { ChooseBranchComponent } from './choose-branch/choose-branch.component';
import { ReceiveOrderWayComponent } from './receive-order-way/receive-order-way.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule(
  {
    declarations:
      [
        ShoppingCartComponent,
        ShoppingCartListComponent,
        ShoppingCartItemComponent,
        ShoppingCartPaymentComponent,
        ChooseBranchComponent,
        ReceiveOrderWayComponent,
        PaymentMethodComponent,
        CustomerInformationComponent,
        CreditCardDetailsComponent,
        OrderSummaryComponent
      ],
    imports:
      [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        ShoppingCartRouting
      ]
  }
)
export class ShoppingCartModule {

}
