import { Ingredient } from './../../models/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-recipe-detail-ingredient',
	templateUrl: './recipe-detail-ingredient.component.html',
	styleUrls: ['./recipe-detail-ingredient.component.scss'],
})
export class RecipeDetailIngredientComponent implements OnInit {
	@Input() ingredient!: Ingredient;

	constructor() {}

	ngOnInit(): void {}
}
