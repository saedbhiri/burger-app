import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-buttons',
  templateUrl: './menu-buttons.component.html',
  styleUrls: ['./menu-buttons.component.css']
})
export class MenuButtonsComponent implements OnInit {

  @Output() category = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onCategorySelected(value: string){
    this.category.emit(value);
  }

}
