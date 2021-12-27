import { Role } from './Role';

export class Player {
	private name: String;
	private score: number;
	private role: Role;

	public constructor (role: Role, name: String, score = 0) {
		this.role = role;
		this.name = name;
		this.score = score;
	}

	public play() {
		if (this.role == Role.Dragon) {
			this.score += 20;
		}
		else {
			this.score = this.score - 10;
		}

	}

	public getScore(): number {
		return this.score;
	}
}