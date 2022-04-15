import { Sauce } from './sauce.model';
import { Ingredient } from './ingredient.model';
import { Weight } from "./weight.model";
import { SideDishes } from './side_dishes.model';

export interface Menu {
  category: string;
  name: string;
  image: string;
  price: number;
  description: string;
  amount: number;
  weight: Weight[];
  sideDishes: SideDishes[];
  ingredients: Ingredient[];
  sauces: Sauce[];
  note: string;
}
