import { useRouter } from "next/router";
import React from "react";

const Params = () => {
	const router = useRouter();
	const { params = [] } = router.query; //[1,2,3,4]
	if (params.length === 1)
		return <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Params of {params[0]}</h1>;
	else if (params.length === 2)
		return (
			<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
				Params of {params[0]} , {params[1]}
			</h1>
		);
	return <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Params</h1>;
};

export default Params;
