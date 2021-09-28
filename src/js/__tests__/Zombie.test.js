import Character from '../app';

test('create Zombie ok', () => {
  const character = new Character('Harry', 'Zombie');
  const result = {
    name: 'Harry',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toBe(result);
});