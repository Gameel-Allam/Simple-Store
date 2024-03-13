import React, { useEffect } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const dashboard = () => {
	const router = useRouter();

	useEffect(() => {
		getSession().then(session => {
			if (!session) signIn();
		});
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<h1 className="text-2xl font-bold mb-10 text-gray-900">Dashboard</h1>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 mb-3">
						<div className="p-6 bg-blue-200 rounded-xl">Content</div>
						<div className="p-6 bg-blue-200 rounded-xl">Content</div>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1">
						<div className="p-6 bg-blue-200 rounded-xl">Content</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default dashboard;
