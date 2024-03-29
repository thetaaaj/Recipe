import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients!: Ingredient[];
  private igChangeSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.getAllIngredient();
  }

  getAllIngredient() {
    this.ingredients = this.shoppingListService.getIngredients();
   this.igChangeSub =  this.shoppingListService.ingredientChange
      .subscribe((ingredients : Ingredient[])=>{
          this.ingredients = ingredients;
      })
  }

  onEditItem(index:number){
      this.shoppingListService.startedEditing.next(index);
  }


  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
