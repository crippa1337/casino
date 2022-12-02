declare global {
	declare namespace App {
		interface Locals {
			user: {
				id: number;
				account_name: string;
				balance: number;
			};
		}
	}

	interface User {
		id: number;
		account_name: string;
		balance: number;
	}


}

export { };
