import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Menu } from './../shared/menu.model';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class MenuService {

  private menu: Menu[] = [];


  constructor(private http: HttpClient,
    private shoppingCartService:ShoppingCartService) { }

  fetchMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>("./assets/menu.json")
      .pipe(
        map(data => {
          return data.map(item => {
            return {
              ...item,
              weight: item.weight ? item.weight : [],
              sideDishes: item.sideDishes ? item.sideDishes : [],
              ingredients: item.ingredients ? item.ingredients : [],
              sauces: item.sauces ? item.sauces : [],
              description: item.description ? item.description: null
            };
          })
        })
      );
  }

  SetMenu(menu: Menu[]) {
    this.menu = menu;
  }

  getMenu() {
    return this.menu.slice();
  }

  getMenuItem(index: number) {
    return this.menu[index];
  }

  getMenuItemByName(name: string) {
    return this.menu.find(element => element.name === name);
  }

  addItemToShoppingCart(item:Menu){
    this.shoppingCartService.addToShoppingCart(item);
  }
}
