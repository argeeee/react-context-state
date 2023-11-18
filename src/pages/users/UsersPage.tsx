import { FC } from "react";
import { UsersPageProvider } from "./UsersPageProvider";
import ExampleComponent from "./widgets/ExampleComponent";

// --------------- Component ------------
interface UsersPageProps {
}
 
const UsersPage: FC<UsersPageProps> = () => {
	console.log('render: UsersPage');

	return (
		<UsersPageProvider>
			Users page
			<br />
			<ExampleComponent />
		</UsersPageProvider>
	);
}
 
export default UsersPage;