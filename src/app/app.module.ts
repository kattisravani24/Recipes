import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombineAllFormsOfDatabindingComponent } from './combine-all-forms-of-databinding/combine-all-forms-of-databinding.component';
import { FormsModule } from '@angular/forms';
import { ServeComponent } from './serve/serve.component';
import { Task2Component } from './task2/task2.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineAllFormsOfDatabindingComponent,
    ServeComponent,
    Task2Component,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
