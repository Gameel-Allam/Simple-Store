// import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import Navbar from "../components/Navbar";

export default function Example({ products }) {
	// const [products, setProducts] = useState([]);

	// useEffect(() => {
	// 	fetch("https://api.escuelajs.co/api/v1/products")
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			setProducts(data.slice(0, 20));
	// 		});
	// }, [products]);

	return (
		<>
			<Navbar />
			<ProductsList products={products} />
		</>
	);
}

// Apply Incremental Side Generation (ISG) to the page
export async function getStaticProps() {
	const res = await fetch("http://localhost:3000/api/products");
	const data = await res.json();
	return { props: { products: data.slice(0, 20) }, revalidate: 10 };
}
