import { useRouter } from "next/router";
import UserDetails from "../../components/UserDetails";

const User = () => {
	const router = useRouter();
	const { usersId } = router.query;

	return <UserDetails usersId={usersId} />;
};

export default User;
