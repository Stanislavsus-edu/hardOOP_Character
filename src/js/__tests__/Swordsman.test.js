import Swordsman from '../Swordsman.js';

test('create Swordsman ok', () => {
  const character = new Swordsman('Harry', 'Swordsman');
  const result = {
    name: 'Harry',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toEqual(result);
});