import Daemon from '../Daemon.js';

test('create Daemon ok', () => {
  const character = new Daemon('Harry', 'Daemon');
  const result = {
    name: 'Harry',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toEqual(result);
});