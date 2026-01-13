import { Component } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply a test', 'https://hlyfemethod.com/wp-content/uploads/2018/04/rainbow-bowl-photo.jpg')
  ];

}
