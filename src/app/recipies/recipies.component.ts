import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe!: Recipe;

  onRecipeSelected(recipe: Recipe){
    this.selectedRecipe = recipe;
    console.log("Recipe Received in parent component : ", this.selectedRecipe);
  }
}
