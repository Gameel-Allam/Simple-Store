import { useRouter } from "next/router";
import React from "react";

const ProductsList = ({ products }) => {
	const router = useRouter();

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Products</h2>
				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{products.map(product => (
						<div
							key={product.id}
							className="group relative"
							style={{
								cursor: "pointer",
							}}
							onClick={() => {
								router.push(`/products/${product.id}`);
							}}
						>
							<div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
								<img src={product.category.image} alt={product.title} className="w-full h-full object-center object-cover" />
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<a href={product.href}>
											<span aria-hidden="true" className="absolute inset-0" />
											{product.title}
										</a>
									</h3>
									<p className="mt-1 text-sm text-gray-500">{product.price}</p>
								</div>
								<a href="#" className="group inline-flex items-center text-sm font-semibold text-indigo-600">
									<span>View</span>
									<span aria-hidden="true" className="ml-2.5">
										<svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M14.707 9.293a1 1 0 010 1.414L11.414 14H13a1 1 0 110 2H7a1 1 0 110-2h1.586l-3.293-3.293a1 1 0 111.414-1.414L10 12.586V5a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z"
											/>
										</svg>
									</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductsList;
