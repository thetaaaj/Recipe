import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChange = new EventEmitter<Ingredient[]>()

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
  }

  addIngredients(ingredients: Ingredient[]){
    // this.ingredients.push(ingredient);
    console.log("ingredient array : ",this.ingredients);  
    this.ingredients.push(...ingredients);
    this.ingredientChange.emit(this.ingredients.slice());
    console.log("Updated ingredient array : ",this.ingredients);  
    
  }
  
}
