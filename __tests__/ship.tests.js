/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Ship } = require('../src/ship.js');

describe('A ship was built and christened', () => {
  let titanic;
  test('Before a ship sails it must have a port', () => {
    titanic = new Ship('Titanic', 'Hull');
    expect(titanic.port).toBe('Hull');
    expect(titanic.name).toBe('HMS Titanic');
  });
});
