import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FOOD_TYPES } from 'src/app/consts/food-types.const';
import { FoodType } from 'src/app/models/food-type.model';

@Component({
	selector: 'app-recipe-picker',
	templateUrl: './recipe-picker.page.html',
	styleUrls: ['./recipe-picker.page.scss'],
})
export class RecipePickerPage {
	private currentFoodTypeIdx: number = 0;

	get currentFoodType(): FoodType {
		return FOOD_TYPES[this.currentFoodTypeIdx];
	}

	constructor(private readonly router: Router) {}

	onNoClick(): void {
		if (this.currentFoodTypeIdx + 1 === FOOD_TYPES.length) {
			this.currentFoodTypeIdx = 0;
		} else {
			this.currentFoodTypeIdx++;
		}
	}

	onYesClick() {
		this.router.navigate(['recipes', this.currentFoodType.id]);
	}

	chooseRandomIngredient() {
		const randomIndex = Math.floor(Math.random() * FOOD_TYPES.length);
		const randomFoodType = FOOD_TYPES[randomIndex];
		this.router.navigate(['recipes', randomFoodType.id]);
	}
}
