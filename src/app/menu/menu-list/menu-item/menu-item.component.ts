import { Menu } from './../../../shared/menu.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: Menu;
  @Input() name: string;

  constructor(
  ) { }

  ngOnInit(): void {

  }

}
