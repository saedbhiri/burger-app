import { MenuService } from './../menu.service';
import { Menu } from './../../shared/menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menu: Menu[];
  categorySelected: string = "beef";

  constructor(private menuService: MenuService) {
    this.menuService.fetchMenu().subscribe(
      data => {
        this.menu = data;
        this.menuService.SetMenu(this.menu);
      }
    );
  }

  ngOnInit(): void {
    this.menu = this.menuService.getMenu();
  }

  onCategory(category: string) {
    this.categorySelected = category;
  }

}
