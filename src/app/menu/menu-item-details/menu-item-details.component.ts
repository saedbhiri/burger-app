import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuService } from './../menu.service';
import { Menu } from './../../shared/menu.model';
import { Component, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
  itemDetailsForm: FormGroup;
  paramRoutesub: Subscription;
  shoppingCartItem: Menu;

  constructor(private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.paramRoutesub = this.route.params.subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.menuItem = this.menuService.getMenuItemByName(this.name);
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
    this.menuService.addItemToShoppingCart(this.shoppingCartItem);
    this.itemDetailsForm.reset();
    this.router.navigate(['/menu'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.paramRoutesub.unsubscribe();
  }

}
