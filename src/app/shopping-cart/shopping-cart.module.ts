import { ShoppingCartRouting } from './shopping-cart-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from "@angular/core";
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './shopping-cart-list/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartPaymentComponent } from './shopping-cart-list/shopping-cart-payment/shopping-cart-payment.component';

@NgModule(
  {
    declarations:
      [
        ShoppingCartComponent,
        ShoppingCartListComponent,
        ShoppingCartItemComponent,
        ShoppingCartPaymentComponent
      ],
    imports:
      [
        CommonModule,
        RouterModule,
        ShoppingCartRouting
      ]
  }
)
export class ShoppingCartModule {

}
