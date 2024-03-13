import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UpdateUser = () => {
	const router = useRouter();
	const { id } = router.query;
	const [user, setUser] = useState({});

	useEffect(() => {
		if (id) {
			fetch(`/api/users/${id}`)
				.then(res => res.json())
				.then(data => {
					setUser(data);
				});
		}
	}, [id]);

	const handleSubmit = async e => {
		e.preventDefault();
		await fetch(`/api/users/${id}`, {
			method: "PUT",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			},
		});
		router.push("/users");
	};

	return (
		<>
			{user.name && (
				<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
					<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
						<form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
									User Name
								</label>
								<div className="mt-2">
									<input
										id="name"
										name="name"
										type="name"
										autoComplete="name"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										value={user.name}
										onChange={e => setUser({ ...user, name: e.target.value })}
									/>
								</div>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
									Email address
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										value={user.email}
										onChange={e => setUser({ ...user, email: e.target.value })}
									/>
								</div>
								<div className="mt-2">
									<button
										type="submit"
										className="inline-flex justify-center w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Update
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default UpdateUser;
