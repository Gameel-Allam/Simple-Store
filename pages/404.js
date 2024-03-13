import React from "react";

const Error = () => {
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
			<h1 className="text-6xl font-bold text-indigo-500">404</h1>
			<p className="text-2xl text-gray-700 mt-4 mb-8">Page Not Found</p>
			<a href="home" className="px-4 py-2 border border-indigo-500 hover:bg-indigo-500 hover:text-white rounded">
				Go Home
			</a>
		</div>
	);
};

export default Error;
