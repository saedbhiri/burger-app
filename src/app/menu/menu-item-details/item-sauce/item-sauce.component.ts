import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Sauce } from './../../../shared/sauce.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-sauce',
  templateUrl: './item-sauce.component.html',
  styleUrls: ['./item-sauce.component.css']
})
export class ItemSauceComponent implements OnInit {

  @Input() sauces: Sauce[];
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("sauces", JSON.stringify(this.sauces));

    this.sauces = JSON.parse(localStorage.getItem("sauces"));
    this.sauces.forEach(item => {
      const control = new FormControl(item);
      (<FormArray>this.form.get('sauces')).push(control);
    })
  }

  onSauceSelected(event) {
    const formArray = (<FormArray>this.form.get('sauces')).controls;
    formArray.forEach((ctrl: FormControl) => {
      if (ctrl.value.sauceName === event.target.value)
        ctrl.value.sauceValue = !ctrl.value.sauceValue;
    });
  }

}
