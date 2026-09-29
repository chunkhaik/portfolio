export type CoffeeBeanProps = {
	coffeeBean: CoffeeBean;
	coffeeBeanIdx: number;
	coffeeBeanCount: number;
};

export type CoffeeBean = {
	'Blend Name': string;
	Details: Details;
	Cafe?: Cafe;
	Taste: Taste;
	Brew?: BrewSettings[];
	Comments: string;
	Rating: 0 | 1 | 2 | 3 | 4 | 5;
};

type BrewSettings = {
	Method: string;
	Ratio?: string;
	'Brew Time': string;
	'Grind Size': string;
	'Water Temp': string;
	Review: string;
};

type Details = {
	Varietal: string;
	Origin: string;
	Roaster: string;
	Process: string;
	Roast: string;
	Altitude: string;
};

type Cafe = {
	Name: string;
	Price: string;
};

type Taste = {
	Acidity: string;
	Body: string;
	'Tasting Notes': string;
};
