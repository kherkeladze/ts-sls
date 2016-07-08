class User {

		id: number;
		forename: string;
		surname: string;
		alias: string;
		email: string;
		username: string;
		password: string;
		roles: [string];
		created: Date;
		updated: Date;
		lastLogin: Date;

		get fullName(): string {
			return this.forename || this.surname ?
				(this.forename + " " + this.surname).trim() :
					this.alias || this.username || this.id.toString();
		}
}

export default User