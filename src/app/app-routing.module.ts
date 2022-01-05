import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipePickerPage } from './pages/recipe-picker/recipe-picker.page';
import { RecipesPage } from './pages/recipes/recipes.page';

const routes: Routes = [
	{
		path: '',
		component: RecipePickerPage,
	},
	{
		path: 'recipes/:foodTypeId',
		component: RecipesPage,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
