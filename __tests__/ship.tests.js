/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Ship, Port } = require('../src/ship.js');

describe('A ship was built and christened', () => {
  let titanic;
  test('Before a ship sails it must have a port', () => {
    titanic = new Ship('Titanic', 'Hull');
    expect(titanic.startingPort).toBe('Hull');
    expect(titanic.name).toBe('HMS Titanic');
  });
});

describe('Setting Sail', () => {
  let rowBoat;
  test('Ship has to leave a port to set sail', () => {
    rowBoat = new Ship(jest.fn(), jest.fn()); // name is Dummy here.
    expect(rowBoat.setSail('majorca')).toBe('Arrived at majorca, you have docked safely.');
    expect(rowBoat.startingPort).toBeFalsy();
  });
});

describe('Ships can dock at different Ports', () => {
  let portsmouth, titanic;
  test('The port object is instantiated', () => {
    portsmouth = new Port(jest.fn()); // Dummy parameter here
    titanic = new Ship(jest.fn(), jest.fn());
    expect(portsmouth).toBeInstanceOf(Object);
    expect(titanic).toBeInstanceOf(Object);
  });
  test('What is the port called?', () => {
    portsmouth = new Port('Portsmouth');
    expect(portsmouth.name).toBe('Portsmouth');
  });
});
