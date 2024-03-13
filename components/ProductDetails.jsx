import { useEffect, useState } from "react";

export default function ProductDetails({ productId }) {
	const [product, setProduct] = useState(null);

	// Using Client-Side Data Fetching
	useEffect(() => {
		if (productId) {
			fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
				.then(response => response.json())
				.then(data => setProduct(data));
		}
	}, [productId]);

	return (
		<div className="bg-white">
			<div className="pt-10">
				{/* Image gallery */}
				<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
					<div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
						<img src={product?.category.image} alt={product?.title} className="h-full w-full object-cover object-center" />
					</div>
				</div>

				{/* Product info */}
				<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.title}</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:row-span-3 lg:mt-0">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl tracking-tight text-gray-900">
							<strong>Price: </strong>${product?.price}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
