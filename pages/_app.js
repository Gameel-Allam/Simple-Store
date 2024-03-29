import "...@component/styles/globals.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session: session, ...pageProps } }) {
	if (Component.getLayout) return Component.getLayout(<Component {...pageProps} />);
	return (
		<SessionProvider session={session}>
			<Navbar />
			<Component {...pageProps} />
		</SessionProvider>
	);
}
