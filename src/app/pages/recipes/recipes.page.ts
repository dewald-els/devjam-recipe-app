import { FoodType } from './../../models/food-type.model';
import { FOOD_TYPES } from './../../consts/food-types.const';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.page.html',
	styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
	public foodType: FoodType | undefined;

	get loading(): boolean {
		return this.recipeService.loading;
	}

	get error(): string {
		return this.recipeService.error;
	}

	get recipes(): Recipe[] {
		return this.recipeService.recipes;
	}

	constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router,
		private readonly recipeService: RecipeService
	) {
		const foodTypeId = this.route.snapshot.paramMap.get('foodTypeId') || -1;
		this.foodType = FOOD_TYPES.find((type) => type.id === +foodTypeId);
	}

	ngOnInit(): void {
		if (!this.foodType) {
			this.router.navigateByUrl('/');
		} else {
			this.recipeService.findRecipesByIngredient(this.foodType?.name);
		}
	}
}
