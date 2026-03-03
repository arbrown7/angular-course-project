import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { RecipeModel } from '../recipes/recipe.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://ng-course-recipe-book-ea29b-default-rtdb.firebaseio.com/recipes.json', 
        recipes
      )
      .subscribe(response => {
        console.log(response);
    });
  }

  fetchRecipes() {
    this.http.get<RecipeModel[]>(
      'https://ng-course-recipe-book-ea29b-default-rtdb.firebaseio.com/recipes.json'
    )
    .pipe(map(recipes => {
      return recipes.map(recipe =>{
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }))
    .subscribe(recipes => {
      this.recipeService.setRecipes(recipes)
    });
  }
}
