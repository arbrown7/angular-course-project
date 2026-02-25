import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList  implements OnInit, OnDestroy {
  recipes: RecipeModel[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (recipes: RecipeModel[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
