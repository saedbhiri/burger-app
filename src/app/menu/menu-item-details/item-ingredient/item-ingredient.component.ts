import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Ingredient } from './../../../shared/ingredient.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-ingredient',
  templateUrl: './item-ingredient.component.html',
  styleUrls: ['./item-ingredient.component.css']
})
export class ItemIngredientComponent implements OnInit {

  @Input() ingredients: Ingredient[];
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("ingredients", JSON.stringify(this.ingredients));
    this.ingredients = JSON.parse(localStorage.getItem("ingredients"));
    this.ingredients.forEach(item => {
      const control = new FormControl(item);
      (<FormArray>this.form.get('ingredients')).push(control);
    })
  }

  onIngredientSelected(event) {
    const FormArray = (<FormArray>this.form.get('ingredients')).controls;
    FormArray.forEach((ctrl: FormControl) => {
      if (ctrl.value.ingredientName === event.target.value)
        ctrl.value.ingredientValue = !ctrl.value.ingredientValue;
    });
  }

}
