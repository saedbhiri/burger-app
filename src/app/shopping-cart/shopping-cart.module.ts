import { ShoppingCartRouting } from './shopping-cart-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from "@angular/core";

@NgModule(
  {
    declarations:
    [
      ShoppingCartComponent
    ],
    imports:
    [
      CommonModule,
      RouterModule,
      ShoppingCartRouting
    ],
    exports: []
  }
)
export class ShoppingCartModule {

}
