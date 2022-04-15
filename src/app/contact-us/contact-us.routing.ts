import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import { Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes =
  [
    { path: '', component: ContactUsComponent }
  ];


@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class ContactUsRouting {

}
