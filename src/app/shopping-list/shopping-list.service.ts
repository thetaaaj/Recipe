import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChange = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

  constructor() { }

  ingredients:Ingredient[] = [
    {name:'Potato',amount:10},
    {name:'Tomato',amount:25}
  ];
  
  getIngredients(){
    return this.ingredients;
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addNewIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChange.next(this.ingredients.slice());
  }

  updateIngredient(index:number, newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientChange.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    console.log("Delete Instruction for :",index);
    this.ingredients.splice(index,1);
    this.ingredientChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    console.log("ingredient array : ",this.ingredients);  
    this.ingredients.push(...ingredients);
    this.ingredientChange.next(this.ingredients.slice());
    console.log("Updated ingredient array : ",this.ingredients);  
    
  }

  

}
