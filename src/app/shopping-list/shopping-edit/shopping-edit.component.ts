import { Component, OnInit ,OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, subscribeOn, Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{
  @ViewChild('f') slForm !: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }
  
  editSubscription!: Subscription;
  editMode :boolean = false;
  editedIndexItem!: number;
  editedIngredient !: Ingredient;

  ingredientName!: string;
  ingredientAmount!: number;

  ngOnInit(): void {
    this.editSubscription = this.shoppingListService.startedEditing
      .subscribe((index : number)=>{
          this.editMode = true;
          this.editedIndexItem = index;
          console.log(this.editedIndexItem);
          this.editedIngredient  = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          })
        })
  }

  onSubmit(form :NgForm) {
    console.log(this.editMode);
    const value = form.value;
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedIndexItem,{
        name:value.name,
        amount:value.amount
      })
      this.editMode = false;
    }
    else{
      this.shoppingListService.addNewIngredient({
        name:value.name,
        amount:value.amount
      })
    }
    form.reset();
  }

   deleteIngredient(){
      this.shoppingListService.deleteIngredient(this.editedIndexItem);
      this.clearForm();
   }

  clearForm(){
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.editSubscription.unsubscribe();
  }
}
