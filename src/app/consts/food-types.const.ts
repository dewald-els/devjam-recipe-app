import { FoodType } from './../models/food-type.model';
export const FOOD_TYPES: FoodType[] = [
	{
		id: 1,
		name: 'Beef',
		image: 'assets/icons/beef.png',
		facts: [
			'There are at least 50 breeds of beef cattle, but fewer than 10 make up most cattle produced. (Source: fillyourplate.org)',
			'Beef is the only natural dietary source of vitamin B12 (Source: https://www.clovermeadowsbeef.com/19-facts-about-beef/)',
		],
	},
	{
		id: 2,
		name: 'Chicken',
		image: 'assets/icons/chicken-leg.png',
		facts: [
			"Egg color depends on the color of a chicken's earlobe.",
			"'Cockerel:' is a young male chicken less than a year old",
		],
	},
	{
		id: 3,
		name: 'Egg',
		image: 'assets/icons/egg-carton.png',
		facts: [
			'Eggs are among the most nutritious foods on the planet. (Source:  healthline.com)',
			'It takes a chicken 24 to 26 hours to produce an egg. (Source: https://www.val-co.com/21-fun-egg-facts-for-world-egg-day-2021/)',
		],
	},
	{
		id: 4,
		name: 'Fish',
		image: 'assets/icons/fish.png',
		facts: ['A fish can drown in water due to lack of oxygen (Source: factretriever.com)'],
	},
	{
		id: 5,
		name: 'Lamb',
		image: 'assets/icons/lamb.png',
		facts: ['A group of sheep is known as a herd, flock or mob.'],
	},
	{
		id: 6,
		name: 'Pork',
		image: 'assets/icons/pork.png',
		facts: [
			'Ham is produced by curing raw pork by salting, also known as dry curing, or brining, also known as wet curing (Source: justfunfacts.com)',
		],
	},
	{
		id: 7,
		name: 'Salad',
		image: 'assets/icons/salad.png',
		facts: [
			'Leonardo da Vinci was the first artist to depict salad in his paintings. (source: https://saladplanet)',
			'A dish consisting of mixed pieces of food, with some definitions requiring at least one raw ingredient. (Source: Wikipedia)',
		],
	},
	{
		id: 8,
		name: 'Shrimp',
		image: 'assets/icons/shrimp.png',
		facts: ['The average shrimp will only live for one to two years. (Source: whalefacts.org)'],
	},
	{
		id: 9,
		name: 'Pasta',
		image: 'assets/icons/spaghetti.png',
		facts: ['Italy produces between 1,700,000 and 3,300,000 TONS of pasta per year. (Source: pastaforall.info)'],
	},
];
