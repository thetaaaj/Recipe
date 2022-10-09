import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    { name: 'Test recipe', imagePath: "https://www.allrecipes.com/thmb/-uZ8uEa8RnGsGZcRnEgfiPWpGKI=/2000x2000/filters:no_upscale()/16354-easy-meatloaf-mfs-74-1x1-1-bc5f6aec17bb42b99d336843da2eb5d3.jpg", description: "Recipe description" },
    { name: 'Egg Recipe', imagePath: "https://s01.sgp1.digitaloceanspaces.com/large/881126-tkslpudttp-1528814435.jpg", description: "Recipe description" },
    { name: 'Noodle', imagePath: "https://thehappyfoodie.co.uk/wp-content/uploads/2021/03/dan-dan-noodle-soup-with-lamb-mr-lee-recipe-3a628f45-d69d-48b0-b424-99176fa1ad0b-scaled.jpeg", description: "Recipe description" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
