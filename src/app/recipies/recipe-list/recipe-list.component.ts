import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    { name: 'Test recipe 1', imagePath: "https://www.allrecipes.com/thmb/-uZ8uEa8RnGsGZcRnEgfiPWpGKI=/2000x2000/filters:no_upscale()/16354-easy-meatloaf-mfs-74-1x1-1-bc5f6aec17bb42b99d336843da2eb5d3.jpg", description: "Recipe description" },
    { name: 'Test recipe 2', imagePath: "https://www.allrecipes.com/thmb/-uZ8uEa8RnGsGZcRnEgfiPWpGKI=/2000x2000/filters:no_upscale()/16354-easy-meatloaf-mfs-74-1x1-1-bc5f6aec17bb42b99d336843da2eb5d3.jpg", description: "Recipe description" },
    { name: 'Test recipe 5', imagePath: "https://www.allrecipes.com/thmb/-uZ8uEa8RnGsGZcRnEgfiPWpGKI=/2000x2000/filters:no_upscale()/16354-easy-meatloaf-mfs-74-1x1-1-bc5f6aec17bb42b99d336843da2eb5d3.jpg", description: "Recipe description" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
