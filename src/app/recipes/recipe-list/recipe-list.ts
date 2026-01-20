import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('Acai Bowl: Planet Bowl', 'Very environmental', 'https://hlyfemethod.com/wp-content/uploads/2018/04/rainbow-bowl-photo.jpg'),
    new RecipeModel('Acai Bowl: Tinkling Purple Fancy Bowl', 'I think the name is funny', 'https://hlyfemethod.com/wp-content/uploads/2018/04/rainbow-bowl-photo.jpg')
  ];

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }
}
