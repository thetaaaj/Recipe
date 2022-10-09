import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

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
  
}
