import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Recipes } from "./recipes/recipes";
import { ShoppingList } from "./shopping-list/shopping-list";
import { RecipeStart } from "./recipes/recipe-start/recipe-start";
import { RecipeDetail } from "./recipes/recipe-detail/recipe-detail";
import { RecipeEdit } from "./recipes/recipe-edit/recipe-edit";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: Recipes, children: [
        { path: '', component: RecipeStart },
        { path: 'new', component: RecipeEdit},
        { path: ':id', component: RecipeDetail, resolve: [RecipesResolverService] },
        { path: ':id/edit', component: RecipeEdit, resolve: [RecipesResolverService]}
    ] },
    { path: 'shopping-list', component: ShoppingList }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}