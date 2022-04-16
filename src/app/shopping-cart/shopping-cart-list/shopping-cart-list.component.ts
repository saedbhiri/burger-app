import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Menu } from 'src/app/shared/menu.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit, OnDestroy {

  shoppingCart: Menu[];
  shoppingCartSubscription: Subscription;
  totalSum: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.shoppingCartSubscription = this.shoppingCartService.shoppingCartChanged.subscribe((shoppingCart: Menu[]) => {
      this.shoppingCart = shoppingCart;
    });
    this.totalSum = this.shoppingCartService.calculateTotalPrice(this.shoppingCart);
  }

  onDeleteFromShoppingCart(event:number) {
    this.shoppingCartService.deleteFromShoppingCart(event);
    this.totalSum = this.shoppingCartService.calculateTotalPrice(this.shoppingCart);
  }

  ngOnDestroy(): void {
    this.shoppingCartSubscription.unsubscribe();
  }

}
