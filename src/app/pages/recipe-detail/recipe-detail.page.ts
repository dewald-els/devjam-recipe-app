import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Location } from '@angular/common';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.page.html',
	styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
	recipe?: Recipe;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router,
		private readonly location: Location,
		private readonly recipeService: RecipeService
	) {
		const recipeId = this.route.snapshot.paramMap.get('recipeId') || -1;
		const recipe = this.recipeService.recipeById(+recipeId);
		if (!recipe) {
			this.router.navigateByUrl('/');
		} else {
			this.recipe = recipe;
		}
	}

	ngOnInit(): void {}

	onBackClick() {
		this.location.back();
	}
}
