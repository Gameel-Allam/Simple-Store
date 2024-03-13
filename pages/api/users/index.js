import { users } from "../../../data/users";

export default function handler(req, res) {
	if (req.method === "GET") {
		res.status(200).json(users);
	} else if (req.method === "POST") {
		const { name, email } = req.body;
		const newUser = {
			id: new Date().getTime().toString(),
			name,
			email,
		};
		users.push(newUser);
		res.status(201).json(newUser);
	}
}
