import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoute: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  {
    path: 'menu',
    loadChildren: () => import("./menu/menu.module").then(m => m.MenuModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import("./contact-us/contact-us.module").then(m => m.ContactUsModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import("./shopping-cart/shopping-cart-routing.module").then(m => m.ShoppingCartRouting)
  },
  {
    path: '**',
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
