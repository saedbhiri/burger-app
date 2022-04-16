import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-payment',
  templateUrl: './shopping-cart-payment.component.html',
  styleUrls: ['./shopping-cart-payment.component.css']
})
export class ShoppingCartPaymentComponent implements OnInit {

  @Input() totalPrice: number;

  constructor() { }

  ngOnInit(): void {
  }

}
