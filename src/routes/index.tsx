import { component$, useContext } from '@builder.io/qwik';
import FeaturedProductCard from '~/components/fatured-product/FeaturedProductCard';
import { APP_STATE } from '~/constants';

export default component$(() => {
	const collections = useContext(APP_STATE).collections;

	return (
		<div>
			<div class="grid grid-cols-1 md:grid-cols-2 bg-gray-900">
				<div class=" order-last md:order-first  w-full self-center py-8 md:py-1">
					<div class=" text-left flex flex-col items-center ">
						<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Best products for winter
						</h2>
						<p class=" text-lg  leading-8 text-gray-300">Feel the magic of christmas time</p>
						<div class="mt-5 flex items-center justify-center gap-x-6 lg:justify-start">
							<a href="#" class="text-sm font-semibold leading-6 text-white">
								SEE ALL
								<span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
				<div class=" w-full self-center">
					<div class="relative order-first md:mt-10">
						<img
							class="  rounded-md bg-white/5 ring-1 ring-white/10"
							src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
							alt="App screenshot"
							width={1824}
							height={1080}
						/>
					</div>
				</div>
			</div>

			<section class=" xl:max-w-7xl xl:mx-auto xl:px-8">
				<div class="mt-4 flow-root">
					<div class="-my-2">
						{collections.map((collection) =>
							collection.featuredAsset ? (
								<div
									key={collection.id}
									class="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible"
								>
									<FeaturedProductCard key={collection.id} collection={collection} />
								</div>
							) : null
						)}
					</div>
				</div>
			</section>

			{/* <section class="pt-12 xl:max-w-7xl xl:mx-auto xl:px-8">
				<div class="mt-4 flow-root">
					<div class="-my-2">
						<div class="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible">
							<div class="sm:px-6 lg:px-8 xl:px-0 pb-4">
								<h2 class="text-2xl font-light tracking-tight text-gray-900">{$localize`Shop by Category`}</h2>
							</div>
							<div class="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8">
								{collections.map((collection) =>
									collection.featuredAsset ? (
										<CollectionCard key={collection.id} collection={collection} />
									) : null
								)}
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	);
});
