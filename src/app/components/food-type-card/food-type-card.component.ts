import { FoodType } from './../../models/food-type.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-food-type-card',
	templateUrl: './food-type-card.component.html',
	styleUrls: ['./food-type-card.component.scss'],
})
export class FoodTypeCardComponent implements OnInit {
	@Input() foodType!: FoodType;

	constructor() {}

	ngOnInit(): void {}
}
