import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChange = new Subject<Recipe[]>;

  constructor(private shoppingL : ShoppingListService){}

  recipes: Recipe[] = [
    {
      name: 'Test recipe',
      imagePath: "https://www.allrecipes.com/thmb/-uZ8uEa8RnGsGZcRnEgfiPWpGKI=/2000x2000/filters:no_upscale()/16354-easy-meatloaf-mfs-74-1x1-1-bc5f6aec17bb42b99d336843da2eb5d3.jpg",
      description: "Recipe description 1",
      ingredients: [{ name: 'meat', amount: 1 }, { name: 'French fries', amount: 20 }]
    },
    {
      name: 'Egg Recipe',
      imagePath: "https://s01.sgp1.digitaloceanspaces.com/large/881126-tkslpudttp-1528814435.jpg",
      description: "Recipe description 2",
      ingredients: [{ name: 'Buns', amount: 2 }, { name: 'lorem', amount: 6 }]
     },
    {
      name: 'Noodle',
      imagePath: "https://thehappyfoodie.co.uk/wp-content/uploads/2021/03/dan-dan-noodle-soup-with-lamb-mr-lee-recipe-3a628f45-d69d-48b0-b424-99176fa1ad0b-scaled.jpeg",
      description: "Recipe description 3",
      ingredients: [{ name: 'meatball', amount: 4 }, { name: 'italian fries', amount: 8 }] 
     }
  ];


  getRecipes() {
    return this.recipes;
  }

  getRecipe(index : number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient:Ingredient[]){
    this.shoppingL.addIngredients(ingredient);
  }

  addRecipe(recipe : Recipe){
    console.log(recipe);
    this.recipes.push(recipe);
    this.recipeChange.next(this.recipes);
  }

  updateRecipe(index:number, recipe : Recipe  ){
   this.recipes[index] = recipe;
   this.recipeChange.next(this.recipes);
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1)
    this.recipeChange.next(this.recipes);
   }
}
