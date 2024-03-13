import { useEffect, useState } from "react";
import UsersList from "../components/UsersList";

export default function Example() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/api/users")
			.then(response => response.json())
			.then(data => {
				setUsers(data);
			});
	}, [users]);

	return (
		<>
			<UsersList users={users} />
		</>
	);
}

// Apply Static Side Generation (SSG) to the page
// export async function getStaticProps() {
// 	const res = await fetch("http://localhost:3000/api/users");
// 	const data = await res.json();
// 	return {
// 		props: { users: data.slice(0, 20) },
// 		revalidate: 1,
// 	};
// }
