interface Teacher {
	private _firstName: string;
	private _lastName: string;
	private _fullTimeEmployee: boolean;
	private _yearsOfExperience?: number;
	private _location: string;
	[key: string]: any;

	constructor(firstName: string, lastName: string, fulltimeEmployee: boolean, yearsOfExperience?: number, location: string) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._fullTimeEmployee = fullTimeEmployee;
		this._location = location;
	}
}
