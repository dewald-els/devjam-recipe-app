export interface Recipe {
	id: number;
	image: string;
	imageType: string;
	likes: number;
	missedIngredientCount: number;
	missedIngredients: Ingredient[];
	title: string;
	unusedIngredients: any[];
	usedIngredientCount: number;
	usedIngredients?: Ingredient[];
}

export interface Ingredient {
	aisle: string;
	amount: number;
	extendedName: string;
	id: number;
	image: string;
	meta: string[];
	metaInformation: string[];
	name: string;
	original: string;
	originalName: string;
	originalString: string;
	unit: string;
	unitLong: string;
	unitShort: string;
}
