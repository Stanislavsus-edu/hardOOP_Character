import Undead from '../Undead.js';

test('create Undead ok', () => {
  const character = new Undead('Harry', 'Undead');
  const result = {
    name: 'Harry',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toEqual(result);
});