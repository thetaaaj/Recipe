import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>()

  constructor(private recipeService : RecipeService) { }
  recipes:any;
  ngOnInit(): void {
    this.getRecipeList();
  } 

  getRecipeList(){
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }

  onRecipeSelected(recipeDetails: Recipe){
    this.recipeSelected.emit(recipeDetails);
  }

}
