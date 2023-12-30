import { FC, ReactNode, createContext, useContext, Dispatch, useReducer } from "react";
import { UsersAction, UsersState, usersStateReducer } from "./store/UsersStore";

// --------------- Context ------------
interface UsersStoreContextType {
	state: UsersState;
	dispatch: Dispatch<UsersAction>;
}

export const UsersStoreContext = createContext<UsersStoreContextType | undefined>(undefined);

export const useUsersStore = () => {
	const context = useContext(UsersStoreContext);

	if (!context) {
		throw new Error('undefined UsersStoreContext');
	}

	return context;
};

export const UsersPageProvider: FC<{ children: ReactNode; }> = ({ children }) => {
	const [state, dispatch] = useReducer(usersStateReducer, {
    counter: 0,
    name: 'name',
  });

	return (
		<UsersStoreContext.Provider value={{
			state, dispatch
		}}>
			{ children }
		</UsersStoreContext.Provider>
	);
}