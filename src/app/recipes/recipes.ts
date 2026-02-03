import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
  providers: [RecipeService]
})
export class Recipes implements OnInit {
  selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: RecipeModel) => {
          this.selectedRecipe = recipe;
        }
      );
  }
}
