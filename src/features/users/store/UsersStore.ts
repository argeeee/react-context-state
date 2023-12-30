export interface UsersState {
	counter: number;
	name: string;
}

export enum ActionType {
	Increment = 1,
	Decrement = 2,
	ChangeName = 3,
}

export type IncrementAction = {
	type: ActionType.Increment,
}

export type DecrementAction = {
	type: ActionType.Decrement,
}

export type ChangeNameAction = {
	type: ActionType.ChangeName,
	payload: {
		name: string;
	}
}

export type UsersAction = IncrementAction | DecrementAction | ChangeNameAction;

export const usersStateReducer = (state: UsersState, action: UsersAction): UsersState => {
  switch (action.type) {
    case ActionType.Increment:
      return { ...state, counter: state.counter + 1 };
    case ActionType.Decrement:
      return { ...state, counter: state.counter - 1 };
    case ActionType.ChangeName:
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};