// import { component$, useStore, useTask$ } from '@builder.io/qwik';
// import { Link } from '@builder.io/qwik-city';
// import { Collection } from '~/generated/graphql';
// import { searchQueryWithCollectionSlug } from '~/providers/shop/products/products';
// import ProductCard from '../products/ProductCard';

// interface IProps {
// 	collection: Collection;
// }

// export default component$(async ({ collection }: IProps) => {
// 	const state = useStore<{
// 		products: any;
// 	}>({
// 		products: [],
// 	});

// 	useTask$(async () => {
// 		const product = await searchQueryWithCollectionSlug(collection.slug);

// 		state.products = product;
// 	});

// 	return (
// 		<div class="">
// 			<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
// 				<div class="flex justify-between items-center">
// 					<div class="sm:px-6 lg:px-8 xl:px-0 pb-4">
// 						<h2 class="text-2xl font-bold tracking-tight text-gray-900">{collection.name}</h2>
// 					</div>
// 					<Link href={`/collections/${collection.slug}`} key={collection.id}>
// 						See more<span aria-hidden="true">→</span>
// 					</Link>
// 				</div>
// 				<div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
// 					{state?.products?.items?.map((item) => (
// 						<ProductCard
// 							key={item.productId}
// 							productAsset={item.productAsset}
// 							productName={item.productName}
// 							slug={item.slug}
// 							priceWithTax={item.priceWithTax}
// 							currencyCode={item.currencyCode}
// 						></ProductCard>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// });

import { component$, useStore, useTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Collection } from '~/generated/graphql';
import { searchQueryWithCollectionSlug } from '~/providers/shop/products/products';
import ProductCard from '../products/ProductCard';

interface IProps {
	collection: Collection;
}

export default component$(({ collection }: IProps) => {
	const state = useStore<{
		products: any;
	}>({
		products: [],
	});

	useTask$(async () => {
		const product = await searchQueryWithCollectionSlug(collection.slug);

		state.products = product;
	});
	return (
		<div class="">
			<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div class="flex justify-between items-center">
					<div class="sm:px-6 lg:px-8 xl:px-0 pb-4">
						<h2 class="text-2xl font-bold tracking-tight text-gray-900">{collection.name}</h2>
					</div>
					<Link href={`/collections/${collection.slug}`} key={collection.id}>
						See more<span aria-hidden="true">→</span>
					</Link>
				</div>
				<div class="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{state?.products?.items?.map((item) => (
						<ProductCard
							key={item.productId}
							productAsset={item.productAsset}
							productName={item.productName}
							slug={item.slug}
							priceWithTax={item.priceWithTax}
							currencyCode={item.currencyCode}
						></ProductCard>
					))}
				</div>
			</div>
		</div>
	);
});
