import Character from '../app';

test('create Character name < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Слишком много/мало символов'));
});

test('create Character name > 10', () => {
  expect(() => new Character('a1234567890', 'Bowman')).toThrowError(new Error('Слишком много/мало символов'));
});

test('create Character type Error', () => {
  expect(() => new Character('Harry', 'Muggle')).toThrowError(new Error('Такого класса нет'));
});

test('create Character name ok', () => {
  const character = new Character('Harry', 'Magician');
  expect(character.name).toBe('Harry');
});

test('create Character type ok', () => {
  const character = new Character('Harry', 'Magician');
  expect(character.type).toBe('Magician');
});

