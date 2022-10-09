import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ingredientName!: string;
  ingredientAmount!: number;

  ngOnInit(): void {
  }

  addRecipe() {
    this.shoppingListService.addNewIngredient({
      name:this.ingredientName,
      amount:this.ingredientAmount
    })
  }
}
