import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FoodTypeCardComponent } from './components/food-type-card/food-type-card.component';
import { FoodTypeFactComponent } from './components/food-type-fact/food-type-fact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipePickerPage } from './pages/recipe-picker/recipe-picker.page';
import { RecipesPage } from './pages/recipes/recipes.page';
import { AppRoutingModule } from './app-routing.module';
import { RecipeDetailPage } from './pages/recipe-detail/recipe-detail.page';
import { RecipeDetailIngredientComponent } from './components/recipe-detail-ingredient/recipe-detail-ingredient.component';

@NgModule({
	declarations: [
		AppComponent,
		FoodTypeCardComponent,
		FoodTypeFactComponent,
		NavbarComponent,
		RecipePickerPage,
		RecipesPage,
  RecipeDetailPage,
  RecipeDetailIngredientComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the app is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000',
		}),
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
