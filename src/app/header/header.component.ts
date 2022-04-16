import { Subscription } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Menu } from '../shared/menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  shoppingCart: Menu[];
  shoppingCartSub: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.getShoppingCart();
    this.shoppingCartSub = this.shoppingCartService.shoppingCartChanged.subscribe((shoppingCart: Menu[]) => {
      this.shoppingCart = shoppingCart;
    });
  }

  ngOnDestroy(): void {
    this.shoppingCartSub.unsubscribe();
  }


}
