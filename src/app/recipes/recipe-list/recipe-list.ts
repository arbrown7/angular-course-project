import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList  implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[];

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }
}
