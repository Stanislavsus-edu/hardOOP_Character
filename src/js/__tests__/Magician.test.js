import Character from '../app';

test('create Magician ok', () => {
  const character = new Character('Harry', 'Magician');
  const result = {
    name: 'Harry',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toBe(result);
});