import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-payment',
  templateUrl: './shopping-cart-payment.component.html',
  styleUrls: ['./shopping-cart-payment.component.css']
})
export class ShoppingCartPaymentComponent implements OnInit {

  @Input() totalPrice: number;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onConfirmOrder() {
    this.router.navigate(['branches'], { relativeTo: this.route });
  }

}
