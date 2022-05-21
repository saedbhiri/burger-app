import { ShoppingCartService } from './../../shopping-cart.service';
import { Menu } from './../../../shared/menu.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() shoppingCartItem: Menu;
  @Input() indexOfItem: number;
  @Output() deleteItem = new EventEmitter<number>();
  price: number;
  sideDishesName: string[];
  ingredientsName: string[];
  saucesName: string[];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.price = this.shoppingCartService.calculatePrice(this.shoppingCartItem);
    this.sideDishesName = this.shoppingCartService.getSideDishe(this.shoppingCartItem);
    this.ingredientsName = this.shoppingCartService.getIngredients(this.shoppingCartItem);
    this.saucesName = this.shoppingCartService.getSauces(this.shoppingCartItem);
  }

  onDeleteItem(index: number) {
    this.deleteItem.emit(index);
  }

}
