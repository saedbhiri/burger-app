import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receive-order-way',
  templateUrl: './receive-order-way.component.html',
  styleUrls: ['./receive-order-way.component.css']
})
export class ReceiveOrderWayComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
  }

  OnReceivingWay(receivingWay:string){
    this.shoppingCartService.storeReceivingOrderWay(receivingWay);
    if (receivingWay === "TakeAway")
    this.shoppingCartService.setDeliveryPriceToZero();
  }

}
