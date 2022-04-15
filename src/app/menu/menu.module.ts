import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './menu-list/menu-item/menu-item.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuComponent } from './menu.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MenuRouting } from './menu-routing.module';
import { MenuButtonsComponent } from './menu-list/menu-buttons/menu-buttons.component';
import { CategoryPipe } from './category.pipe';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
import { MenuStartComponent } from './menu-start/menu-start.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemHeaderComponent } from './menu-item-details/item-header/item-header.component';
import { ItemAmountComponent } from './menu-item-details/item-amount/item-amount.component';
import { ItemWeightComponent } from './menu-item-details/item-weight/item-weight.component';
import { ItemSideDishComponent } from './menu-item-details/item-side-dish/item-side-dish.component';
import { ItemSauceComponent } from './menu-item-details/item-sauce/item-sauce.component';
import { ItemIngredientComponent } from './menu-item-details/item-ingredient/item-ingredient.component';
import { ItemNoteComponent } from './menu-item-details/item-note/item-note.component';

@NgModule({
  declarations:
    [
      MenuComponent,
      MenuListComponent,
      MenuButtonsComponent,
      MenuItemComponent,
      CategoryPipe,
      MenuItemDetailsComponent,
      MenuStartComponent,
      ItemHeaderComponent,
      ItemAmountComponent,
      ItemWeightComponent,
      ItemSideDishComponent,
      ItemSauceComponent,
      ItemIngredientComponent,
      ItemNoteComponent
    ],
  imports:
    [
      CommonModule,
      RouterModule,
      MenuRouting,
      ReactiveFormsModule
    ],
  exports:
    [

    ]
})
export class MenuModule {
}
