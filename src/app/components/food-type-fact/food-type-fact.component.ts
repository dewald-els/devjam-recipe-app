import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-food-type-fact',
	templateUrl: './food-type-fact.component.html',
	styleUrls: ['./food-type-fact.component.scss'],
})
export class FoodTypeFactComponent implements OnInit {
	@Input() fact: string = '';

	constructor() {}

	ngOnInit(): void {}
}
