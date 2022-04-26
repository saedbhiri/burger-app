import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
import { MenuComponent } from './menu.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [

  { path: '', component: MenuComponent },
  { path: ':name', component: MenuItemDetailsComponent }
]

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class MenuRouting {
}
