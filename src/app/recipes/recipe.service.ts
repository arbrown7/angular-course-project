import { Injectable } from "@angular/core";
import { RecipeModel } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService  {

    private recipes: RecipeModel[] = [
        new RecipeModel(
            'Acai Bowl: Planet Bowl', 
            'Very environmental', 
            'https://hlyfemethod.com/wp-content/uploads/2018/04/rainbow-bowl-photo.jpg',
            [
                new Ingredient('strawberries', 12),
                new Ingredient('acai', 1)
            ]
        ),
        new RecipeModel(
            'Acai Bowl: Twinkling Purple Fancy Bowl', 
            'I think the name is funny', 
            'https://hlyfemethod.com/wp-content/uploads/2018/04/rainbow-bowl-photo.jpg',
            [
                new Ingredient('star fruit', 1),
                new Ingredient('acai', 1),
                new Ingredient('yogurt', 1)
            ]
    )
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}