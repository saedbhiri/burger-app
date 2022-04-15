import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.css']
})
export class ItemHeaderComponent implements OnInit {

  @Input() name: string;
  @Input() imgUrl: string;
  @Input() description: string;
  @Input() category: string;

  constructor() { }

  ngOnInit(): void {
  }

  isAllowed(category: string): boolean {
    if (category === "beef")
      return true;
    else if (category === "chicken")
      return true;
    else
      return false;
  }
}
