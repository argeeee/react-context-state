// --------------- Events ------------
export class UsersPageEvent {
}

export class IncrementEvent extends UsersPageEvent {
	// can add payload...
}

export class DecrementEvent extends UsersPageEvent {
	// can add payload...
}

export class ChangeNameEvent extends UsersPageEvent {
	name: string;

	constructor(name: string) {
		super();
		this.name = name;
	}
}
