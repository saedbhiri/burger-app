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

  constructor(private shoppingCartService: ShoppingCartService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.totalPrice = this.shoppingCartService.getTotalPrice() + this.shoppingCartService.getDeliveryPrice();
  }

  onAddCreditCard(form: NgForm) {
    this.shoppingCartService.addCreditCard(form.value);
    form.reset();
    this.router.navigate(['../orderSummary'], { relativeTo: this.route });
  }

  onCreditCardCancel() {
    this.router.navigate(['../paymentMethod'], { relativeTo: this.route });
  }

}
