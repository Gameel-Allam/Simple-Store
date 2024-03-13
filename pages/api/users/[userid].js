import { users } from "../../../data/users";

export default function handler(req, res) {
	const { userid } = req.query;
	if (req.method === "DELETE") {
		const idx = users.findIndex(c => c.id === parseInt(userid));
		users.splice(idx, 1);
		res.status(200).json(users);
	} else if (req.method === "GET") {
		const user = users.find(c => c.id === parseInt(userid));
		res.status(200).json(user);
	} else if (req.method === "PUT") {
		const idx = users.findIndex(c => c.id === parseInt(userid));
		users[idx] = req.body;
		res.status(200).json(users[idx]);
	}
}
