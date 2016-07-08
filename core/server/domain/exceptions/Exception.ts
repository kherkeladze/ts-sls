class Error {
    public name: string;
    public message: string;
    public stack: string;

    constructor(message?: string) {
        this.message = message;
    }
}

class Exception extends Error {
		constructor(public message: string) {
            super(message);
			this.name = 'Exception';
			this.message = message;
			this.stack = (<any>new Error()).stack;
		}

		toString() {
			return this.name + ': ' + this.message;
		}
}

export default Exception