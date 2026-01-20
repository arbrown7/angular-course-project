import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
})
export class RecipeItem {
  @Input() recipe: RecipeModel;
  @Output() recipeSelected = new EventEmitter<void>

  onSelected() {
    this.recipeSelected.emit();
  }
}
