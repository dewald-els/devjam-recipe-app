import { Recipe } from '../models/recipe.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs';

const { recipeAPI } = environment;

@Injectable({
	providedIn: 'root',
})
export class RecipeService {
	private _recipes: Recipe[] = [];
	private _loading: boolean = false;
	private _error: string = '';

	constructor(private http: HttpClient) {}

	get recipes(): Recipe[] {
		return this._recipes;
	}

	get loading(): boolean {
		return this._loading;
	}

	get error(): string {
		return this._error;
	}

	findRecipesByIngredient(ingredient: string): void {
		this._loading = true;
		this.http
			.get<Recipe[]>(`${recipeAPI}/recipes?ingredient=${ingredient}`)
			.pipe(
				finalize(() => {
					this._loading = false;
				})
			)
			.subscribe({
				next: (recipes: Recipe[]) => {
					this._recipes = recipes;
				},
				error: (error: HttpErrorResponse) => {
					this._error = error.message;
				},
			});
	}
}
