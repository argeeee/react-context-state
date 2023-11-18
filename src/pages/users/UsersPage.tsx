import { FC } from "react";
import { useUsersPage } from "./UsersPageProvider";
import ExampleComponent from "./widgets/ExampleComponent";

// --------------- Component ------------
interface UsersPageProps {
}
 
const UsersPage: FC<UsersPageProps> = () => {
	console.log('render: UsersPage');

	const { state } = useUsersPage();

	return (
		<>
			Users page
			<br />
			<ExampleComponent />

			<hr />
			User page again!! ---- { state.name }
		</>
	);
}
 
export default UsersPage;