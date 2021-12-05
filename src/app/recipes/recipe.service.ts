import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Macaroni and Cheese',
      'classic cheesy flavor',
      '/assets/macaroni and cheese.jpg'
    ),
    new Recipe(
      'Soup',
      'great tasty spicy soup',
      '/assets/soup.jpg'
    ),
  ];

  selected = new EventEmitter<Recipe>();

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  getSelected() {
    return this.selected;
  }

  getRecipes() {
    return this.recipes.slice();
  }

}
