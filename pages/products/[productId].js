import { useRouter } from "next/router";
import React from "react";
import ProductDetails from "../../components/ProductDetails";

const Product = () => {
	const router = useRouter();
	const { productId } = router.query;

	return <ProductDetails productId={productId} />;
};

export default Product;
