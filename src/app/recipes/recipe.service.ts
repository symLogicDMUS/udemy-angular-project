import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Special Mac and Cheese',
      'classic cheesy flavor',
      '/assets/macaroni and cheese.jpg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Macaroni Noodles', 1),
        new Ingredient('Onions', 1),
        new Ingredient('Green Peppers', 1),
      ]
    ),
    new Recipe(
      'Soup',
      'great tasty spicy soup',
      '/assets/soup.jpg',
      [
        new Ingredient('Beans', 1),
        new Ingredient('Taco Sauce', 1),
        new Ingredient('Avocado', 1),
        new Ingredient('Tomatoes', 3)
      ]
    ),
  ];

  selected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  deleteRecipe() {

  }

  getSelected() {
    return this.selected;
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient []) {
    this.slService.addIngredients(ingredients)
  }

}
