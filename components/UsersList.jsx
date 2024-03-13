import { useRouter } from "next/router";
import React from "react";

const UsersList = ({ users }) => {
	const router = useRouter();

	const handleDelete = Id => {
		fetch(`/api/users/${Id}`, {
			method: "DELETE",
		}).then(() => {
			router.push("/users");
		});
	};

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">users</h2>

				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{users.map(user => (
						<div key={user.id} className="group relative">
							<div
								className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75"
								style={{
									cursor: "pointer",
								}}
								onClick={() => router.push(`/users/${user.id}`)}
							>
								<img
									src={"https://i.pravatar.cc/400?u=" + user.id}
									alt={user.name}
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<a href={user.href}>
											<span aria-hidden="true" />
											{user.name}
										</a>
									</h3>
									<p className="mt-1 text-sm text-gray-500">{user.email}</p>
								</div>
							</div>
							<div className="mt-4 flex justify-between">
								<span
									onClick={_ => router.push(`/users/update/${user.id}`)}
									className="group inline-flex items-center text-sm font-semibold text-indigo-600  "
									style={{
										cursor: "pointer",
									}}
								>
									<span>Update</span>
								</span>
								<span
									onClick={_ => handleDelete(user.id)}
									className="group inline-flex items-center text-sm font-semibold text-red-600 "
									style={{
										cursor: "pointer",
									}}
								>
									<span>Delete</span>
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default UsersList;
