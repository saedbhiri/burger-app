import { ContactUsRouting } from './contact-us.routing';
import { ContactUsComponent } from './contact-us.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule(
  {
    declarations:
      [
        ContactUsComponent
      ],
    imports:
      [
        CommonModule,
        RouterModule,
        ContactUsRouting

      ]
  }
)
export class ContactUsModule {

}
