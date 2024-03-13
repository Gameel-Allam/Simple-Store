// import { useEffect, useState } from "react";
import useSWR from "swr";

// Apply Stale-While-Revalidate (SWR) to the page
const fetcher = async userId => {
	const res = await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`);
	const data = await res.json();
	return data;
};

export default function UserDetails({ usersId }) {
	// const [user, setUser] = useState(null);
	const { data, error } = useSWR("user", () => fetcher(usersId));
	const user = data;

	// useEffect(() => {
	// 	if (usersId) {
	// 		fetch(`https://api.escuelajs.co/api/v1/users/${usersId}`)
	// 			.then(response => response.json())
	// 			.then(data => setUser(data));
	// 	}
	// }, [usersId]);

	if (error) return <div>error</div>;
	if (!data) return <div>Loading....</div>;

	return (
		<div className="bg-white">
			<div className="pt-6 sm:pt-12">
				{/* Image gallery */}
				<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
					<img src={user?.avatar} alt={user?.name} className="h-full w-full object-cover object-center" />
				</div>

				{/* Product info */}
				<div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{user?.name}</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:row-span-3 lg:mt-0">
						<h2 className="sr-only">user information</h2>
						<p className="text-3xl tracking-tight text-gray-900">
							<strong>E-mail :</strong> {user?.email}
						</p>
						<p className="text-3xl tracking-tight text-gray-900">
							<strong>Role :</strong> {user?.role}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
