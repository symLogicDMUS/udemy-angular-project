import { Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged =  new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient [] = [
    new Ingredient('Cheese', 5),
    new Ingredient('Tomatoes', 10)
  ]
  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
