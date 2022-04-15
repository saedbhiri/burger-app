import { Subscription } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu } from '../shared/menu.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit , OnDestroy {

  shopiingCart: Menu[];
  shoppingCartSubscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shopiingCart = this.shoppingCartService.getShoppingCart();
    this.shoppingCartService.shoppingCartChanged.subscribe((shoppingCart: Menu[]) => {
      this.shopiingCart = shoppingCart;
    });
    console.log(this.shopiingCart);
  }

  ngOnDestroy(): void {
    this.shoppingCartSubscription.unsubscribe();
  }

}
