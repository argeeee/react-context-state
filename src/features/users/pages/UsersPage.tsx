import { FC } from "react";
import ExampleComponent from "../widgets/ExampleComponent";
import Comp from "../widgets/Comp";

// --------------- Component ------------
interface UsersPageProps {
}
 
const UsersPage: FC<UsersPageProps> = () => {
	console.log('render: UsersPage');

	return (
		<>
			Users page
			<br />

			<ExampleComponent />
			<hr />

			<Comp />
		</>
	);
}
 
export default UsersPage;