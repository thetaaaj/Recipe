import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onIngredientAdd = new EventEmitter<Ingredient>();
  constructor() { }

  ingredientName!: string;
  ingredientAmount!: number;

  ngOnInit(): void {
  }

  addRecipe() {
    this.onIngredientAdd.emit({
      name:this.ingredientName,
      amount:this.ingredientAmount
    })
  }
}
