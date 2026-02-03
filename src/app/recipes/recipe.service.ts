import { RecipeModel } from "./recipe.model";

export class RecipeService  {
    private recipes: RecipeModel[] = [
    new RecipeModel('Acai Bowl: Planet Bowl', 'Very environmental', 'https://hlyfemethod.com/wp-content/uploads/2018/04/rainbow-bowl-photo.jpg'),
    new RecipeModel('Acai Bowl: Tinkling Purple Fancy Bowl', 'I think the name is funny', 'https://hlyfemethod.com/wp-content/uploads/2018/04/rainbow-bowl-photo.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}