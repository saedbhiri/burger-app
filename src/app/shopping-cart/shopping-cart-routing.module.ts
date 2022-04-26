import { ReceiveOrderWayComponent } from './receive-order-way/receive-order-way.component';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { ChooseBranchComponent } from './choose-branch/choose-branch.component';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent },
  { path: 'branches', component: ChooseBranchComponent },
  { path: 'receivingOrderWay', component: ReceiveOrderWayComponent }
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
