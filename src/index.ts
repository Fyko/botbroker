import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

export type Product = keyof typeof Groups | keyof typeof Bots;

type APISale = [string, number];

type APIResponse = APISale[];

export interface Sale {
	date: Date;
	amount: number;
}

export const Bots = {
	ADEPT: 30,
	BALKO: 8,
	CYBERSOLE: 6,
	DASHEIO: 4,
	GHOST_SNKRS: 3,
	MEKPREME: 24,
	PHANTOMAIO: 2,
	PRISMAIO: 10,
	PROJECT_DESTORYER: 5,
	SPLASHFORCE: 11,
	SWFTAIO: 22,
	VELOX: 91,
	WRATH: 49
};

export const Groups = {
	BOUNCE_ALERTS: 88,
	CALICOS: 25,
	EXCLUDED: 90,
	FLIPSIO: 89,
	GUAP: 19,
	MEKNOTIFYCN: 28,
	PEACHY_PINGS: 14,
	RESTOCK_WORLD: 13,
	SITE_SUPPLY: 23,
	THREEFIVEONEIO: 16
};

export const Products = { ...Groups, ...Bots };

/**
 * Crafts the URL to request the latest sales
 * @param product The ID of the product to fetch
 * @param renewal The subscription type of the product, "renewal" or "lifetime"
 * @param days How many days back to fetch sales
 */
export function craftURL(product: number, type = 'renewal', days = 365): string {
	const params = new URLSearchParams();
	params.set('key_type', type);
	params.set('days', `${days}`);

	return `https://botbroker.io/bots/${product}/chart?${params}`;
}

export async function fetchData(url: string): Promise<APIResponse> {
	const response = await fetch(url);
	return (await response.json()) as APIResponse;
}

/**
 * Fetches the latest sales of a BotBroker product
 * @param product The product to fetch
 * @param type The subscription type of the product, "renewal" or "lifetime"
 * @param days How many days back to fetch sales
 */
export async function fetchLatest(product: Product, type: 'renewal' | 'lifetime' = 'renewal', days = 365): Promise<Sale[]> {
	const id = Products[product];
	if (!id) throw new TypeError(`Product "${product}" does not exist.`);

	const url = craftURL(id, type, days);
	const data = await fetchData(url);

	const mapped: Sale[] = data.map(([date, amount]) => ({ date: new Date(date), amount }));

	return mapped;
}
