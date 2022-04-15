import { MainRouting } from './main.routing.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule(
  {
    declarations:
      [
        MainComponent
      ],
    imports:
      [
        CommonModule,
        RouterModule,
        MainRouting
      ]
  }
)
export class MainModule {

}
