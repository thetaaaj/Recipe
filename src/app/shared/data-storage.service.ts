import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Recipe } from "../recipies/recipe.model";
import { RecipeService } from "../recipies/recipe.service";

@Injectable({
  providedIn: 'root'
})
export class dataStorageService {
  
  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-course-recipe-book-b6162-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json', recipes)
      .subscribe(data => {
        // console.log(data);
      })
      ;
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-b6162-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        })
      )
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      })
      ;
  }

}