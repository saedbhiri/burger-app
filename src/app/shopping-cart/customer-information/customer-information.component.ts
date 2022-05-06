import { ShoppingCartService } from './../shopping-cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {

  custonerInfoForm: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {

    this.custonerInfoForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]+/)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'city': new FormControl(null, Validators.required),
      'streetNumber': new FormControl(null, Validators.required),
      'houseNumber': new FormControl(null, Validators.required),
      'zip': new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern(/^[1-9]+[0-9]+/)]),
      'confirmConditions': new FormControl(null, Validators.requiredTrue)
    });

  }

  onCancel() {
    this.router.navigate(['../receivingOrderWay'], { relativeTo: this.route });
  }

  onCustomerInfoFormSubmit() {
    this.shoppingCartService.addCustomerInfo(this.custonerInfoForm.value);
    this.custonerInfoForm.reset();
    this.router.navigate(['../paymentMethod'], { relativeTo: this.route });
  }
}
