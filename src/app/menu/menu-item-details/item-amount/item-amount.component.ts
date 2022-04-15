import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-amount',
  templateUrl: './item-amount.component.html',
  styleUrls: ['./item-amount.component.css']
})
export class ItemAmountComponent implements OnInit {

  @Input() amount: number;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
