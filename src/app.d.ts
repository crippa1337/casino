declare global {
	declare namespace App {
		interface Locals {
			user: {
				id: number;
				account_name: string;
				balance: number;
			};

			rooms: {
				id: number;
				bet: number;
				occupied: number;
			};
		}
	}

	interface User {
		id: number;
		account_name: string;
		balance: number;
	}

	interface Cfrooms {
		id: number;
		bet: number;
		occupied: number;
	}

}

export { };
