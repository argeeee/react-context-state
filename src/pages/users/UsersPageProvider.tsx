import { FC, ReactNode, createContext, useContext, useState } from "react";
import { DecrementEvent, IncrementEvent, UsersPageEvent } from "./UsersPageEvents";

// --------------- Context ------------
interface UsersPageContextType {
	state: UsersPageState,
	emit: (value: UsersPageEvent) => void;
}

export const UsersPageContext = createContext<UsersPageContextType | undefined>(undefined);

export const useUsersPage = () => {
	const context = useContext(UsersPageContext);

	if (!context) {
		throw new Error('undefined UsersPageContext');
	}

	return context;
};

interface UsersPageProviderProps {
  children: ReactNode;
}

export const UsersPageProvider: FC<UsersPageProviderProps> = ({ children }) => {
	const [usersPageState, setUsersPageState] = useState<UsersPageState>({
		counter: 0
	});

	return (
		<UsersPageContext.Provider value={{
			state: usersPageState,
			emit: (event: UsersPageEvent) => setUsersPageState((prev) => {
				if (event instanceof IncrementEvent) {
					return {
						...prev,
						counter: prev.counter + 1,
					};
				}
				else if (event instanceof DecrementEvent) {
					return {
						...prev,
						counter: prev.counter - 1,
					};
				}

				return prev;
			})
		}}>
			{ children }
		</UsersPageContext.Provider>
	);
}