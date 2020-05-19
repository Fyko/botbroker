import ava from 'ava';
import { Products, fetchData, craftURL } from '../dist';

ava('every product returns a number', (test): void => {
	const products = Object.values(Products);
	test.plan(products.length);

	for (const product of products) {
		test.is(typeof product, 'number');
	}
});

ava('every product title is in full-caps', (test): void => {
	const products = Object.keys(Products);
	test.plan(products.length);

	for (const product of products) {
		test.is(product, product.toUpperCase());
	}
});

ava('every product request returns an array', async (test): Promise<void> => {
	const products = Object.values(Products);
	test.plan(products.length);

	for (const product of products) {
		const url = craftURL(product);
		const data = await fetchData(url);
		test.true(Array.isArray(data));
	}
});
