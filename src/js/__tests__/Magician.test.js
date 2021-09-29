import Magician from '../Magician.js';

test('create Magician ok', () => {
  const character = new Magician('Harry', 'Magician');
  const result = {
    name: 'Harry',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toEqual(result);
});