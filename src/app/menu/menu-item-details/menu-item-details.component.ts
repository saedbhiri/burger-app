import { ShoppingCartService } from './../../shopping-cart/shopping-cart.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuService } from './../menu.service';
import { Menu } from './../../shared/menu.model';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.css']
})
export class MenuItemDetailsComponent implements OnInit, OnDestroy {

  menuItem: Menu;
  name: string;
  id: number;
  editMode: boolean = false;
  itemDetailsForm: FormGroup;
  paramRoutesub: Subscription;
  shoppingCartItem: Menu;

  constructor(private menuService: MenuService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.paramRoutesub = this.route.params.subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.editMode = params['name'] == null;
        if (!this.editMode) {
          this.menuItem = this.menuService.getMenuItemByName(this.name);
        }
        else {
          this.id = params['id'];
          this.menuItem = this.shoppingCartService.getShoppingCartByIndex(this.id);
        }
      }
    );

    this.itemDetailsForm = new FormGroup({
      'amount': new FormControl(this.menuItem.amount),
      'weight': new FormArray([]),
      'sideDishes': new FormArray([]),
      'ingredients': new FormArray([]),
      'sauces': new FormArray([]),
      'note': new FormControl(this.menuItem.note)
    });
  }

  onSubmit() {
    this.shoppingCartItem = Object.assign({}, this.menuItem, this.itemDetailsForm.value);

    if (this.editMode) {
      this.shoppingCartService.updateShoppingCart(this.id, this.shoppingCartItem);
      this.itemDetailsForm.reset();
      this.router.navigate(['/shopping-cart'], { relativeTo: this.route });
    }
    else {
      this.menuService.addItemToShoppingCart(this.shoppingCartItem);
      this.itemDetailsForm.reset();
      this.router.navigate(['/menu'], { relativeTo: this.route });
    }
  }

  onBack() {
    if (this.editMode) {
      this.router.navigate(['/shopping-cart'], { relativeTo: this.route });
    }
    else {
      this.router.navigate(['/menu'], { relativeTo: this.route });
    }
  }

  ngOnDestroy(): void {
    this.paramRoutesub.unsubscribe();
  }

}
