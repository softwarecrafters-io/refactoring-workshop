import { Player } from '../../core/signatureChange/Player';
import { Role } from '../../core/signatureChange/Role';

describe('The player', ()=>{
	it('increases score when dragon plays', ()=>{
		const player = new Player(Role.Dragon, "WhiteDragon", 5);

		player.play();

		expect(player.getScore()).toBe(25);
	})

	it('sets the initial score', ()=>{
		const player = new Player(Role.Dragon, "WhiteDragon", 3);

		expect(player.getScore()).toBe(3);
	})
})