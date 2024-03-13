import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default nextAuth({
	providers: [
		GithubProvider({
			clientId: "629cb8bdfe94bcfbde91",
			clientSecret: "e700a181050067c2f94659a855945cbc7db6203e",
		}),
	],
});
