import { FC } from "react";
import { useUsersPage } from "../UsersPageProvider";
import { DecrementEvent, IncrementEvent } from "../UsersPageEvents";

interface ExampleComponentProps {
}
 
const ExampleComponent: FC<ExampleComponentProps> = () => {
	console.log('render: ExampleComponent');

	const { state: usersPageState, emit } = useUsersPage();
	
	return (
		<>
			Ciao ExampleComponent!!!
			<hr />
			{ usersPageState.counter }
			<hr />
			<button onClick={() => emit(new IncrementEvent())} >
				Increment
			</button>
			<button onClick={() => emit(new DecrementEvent())} >
				Decrement
			</button>
		</>
	);
}
 
export default ExampleComponent;