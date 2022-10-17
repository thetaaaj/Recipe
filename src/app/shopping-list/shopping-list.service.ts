import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChange = new Subject<Ingredient[]>()

  constructor() { }

  ingredients:Ingredient[] = [
    {name:'Potato',amount:10},
    {name:'Tomato',amount:25}
  ];
  
  getIngredients(){
    return this.ingredients;
  }

  addNewIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // this.ingredients.push(ingredient);
    console.log("ingredient array : ",this.ingredients);  
    this.ingredients.push(...ingredients);
    this.ingredientChange.next(this.ingredients.slice());
    console.log("Updated ingredient array : ",this.ingredients);  
    
  }
  
}
