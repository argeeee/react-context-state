import { useUsersStore } from "../UsersStoreProvider";

function Comp() {
	console.log('render: Comp');

	const { state } = useUsersStore();
	
	return (
		<>
			User page again!! ---- { state.name }
		</>
	);
}

export default Comp;