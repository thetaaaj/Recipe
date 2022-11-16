import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth/auth.component";
import { RecipeDetailComponent } from "./recipies/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipies/recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipies/recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipies/recipe-start/recipe-start.component";
import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },

  {
    path: 'recipes', component: RecipiesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },

]

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}