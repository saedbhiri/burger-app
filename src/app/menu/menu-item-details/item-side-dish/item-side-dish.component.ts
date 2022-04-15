import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { SideDishes } from './../../../shared/side_dishes.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-side-dish',
  templateUrl: './item-side-dish.component.html',
  styleUrls: ['./item-side-dish.component.css']
})
export class ItemSideDishComponent implements OnInit {

  @Input() sideDishes: SideDishes[];
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("sideDishes", JSON.stringify(this.sideDishes));
    this.sideDishes = JSON.parse(localStorage.getItem("sideDishes"));
    this.sideDishes.forEach(item => {
      const control = new FormControl(item);
      (<FormArray>this.form.get('sideDishes')).push(control);
    })
  }

  onSideDishesSelected(event) {
    const formArray = (<FormArray>this.form.get('sideDishes')).controls;
    formArray.forEach((ctrl: FormControl) => {
      if (ctrl.value.sideName === event.target.value)
        ctrl.value.sideValue = !ctrl.value.sideValue;
    });
  }

}
