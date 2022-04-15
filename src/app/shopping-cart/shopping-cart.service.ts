import { Menu } from './../shared/menu.model';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {

  private shoppingCart: Menu[] = [];
  private sum: number = 0;
  shoppingCartChanged = new Subject<Menu[]>();

  getShoppingCart(){
    return this.shoppingCart.slice();
  }

  addToShoppingCart(item: Menu) {
    this.shoppingCart.push(item);
    this.shoppingCartChanged.next(this.shoppingCart.slice());
  }

  deleteFromShoppingCart(index: number) {
    this.shoppingCart.splice(index, 1);
    this.shoppingCartChanged.next(this.shoppingCart.slice());
  }

  updateShoppingCart(index: number, newItem: Menu) {
    this.shoppingCart[index] = newItem;
    this.shoppingCartChanged.next(this.shoppingCart.slice());
  }

  getShoppingCartLength(){
    return this.shoppingCart.length;
  }

  calculatePrice(item: Menu) : number {
    this.sum = item.price;
    item.weight.forEach(weight => {
      this.sum += (weight.quantity - 1) * weight.price;
    })

    item.sideDishes.forEach(sideDish => {
      if (sideDish.sideValue)
        this.sum += sideDish.sidePrice;
    })

    return this.sum *=  item.amount;
  }

}
