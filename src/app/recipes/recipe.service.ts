import {Recipe} from "./recipe.model";

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  getRecipes() {
    return this.recipes.slice();
  }

}
