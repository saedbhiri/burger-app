import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Weight } from './../../../shared/weight.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-weight',
  templateUrl: './item-weight.component.html',
  styleUrls: ['./item-weight.component.css']
})
export class ItemWeightComponent implements OnInit {

  @Input() weight: Weight[];
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("weight", JSON.stringify(this.weight));
    this.weight = JSON.parse(localStorage.getItem("weight"));
    this.weight.forEach(item => {
      const control = new FormControl(item);
      (<FormArray>this.form.get('weight')).push(control);
    })
  }

  onWeightChanged(event: any) {
    const formArray = (<FormArray>this.form.get('weight')).controls;
    formArray.forEach((ctrl: FormControl) => {
      ctrl.value.quantity += event.target.value - (ctrl.value.quantity * ctrl.value.grams);
    })
  }
}
