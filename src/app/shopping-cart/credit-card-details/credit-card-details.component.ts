import { Router, ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {

  totalPrice: number;
  months: number[];
  years: number[];


  constructor(private shoppingCartService: ShoppingCartService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.totalPrice = this.shoppingCartService.getTotalPrice() + this.shoppingCartService.getDeliveryPrice();
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.buildYearsArray();
  }

  onAddCreditCard(form: NgForm) {
    this.shoppingCartService.addCreditCard(form.value);
    form.reset();
    this.router.navigate(['../orderSummary'], { relativeTo: this.route });
  }

  onCreditCardCancel() {
    this.router.navigate(['../paymentMethod'], { relativeTo: this.route });
  }

  buildYearsArray() {
    var year = new Date().getFullYear();
    var range = [];
    range.push(year);
    for (var i = 1; i < 6; i++) {
      range.push(year + i);
    }
    this.years = range;
  }

}
