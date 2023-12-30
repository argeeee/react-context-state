import { FC } from "react";
import { useUsersStore } from "../UsersStoreProvider";
import { ActionType } from "../store/UsersStore";

interface ExampleComponentProps {
}
 
const ExampleComponent: FC<ExampleComponentProps> = () => {
	console.log('render: ExampleComponent');

	const { state, dispatch } = useUsersStore();
	
	return (
		<>
			Hi ExampleComponent!!!
			<hr />
			{ state.counter }
			<hr />
			<button onClick={() => dispatch({ type: ActionType.Increment })} >
				Increment
			</button>
			<button onClick={() => dispatch({ type: ActionType.Decrement })} >
				Decrement
			</button>
		</>
	);
}
 
export default ExampleComponent;