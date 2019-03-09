/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Ship } = require('../src/ship.js');
const { Port } = require('../src/port.js');

describe('A ship was built and christened', () => {
  let ship;
  let port;
  test('Before a ship sails it must have a port', () => {
    port = new Port('Dover');
    ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
});

describe('Setting Sail', () => {
  let rowBoat;
  test('Ship has to leave a port to set sail', () => {
    rowBoat = new Ship(jest.fn()); // name is Dummy here.
    expect(rowBoat.setSail('majorca')).toBe('Arrived at majorca, you have docked safely.');
    expect(rowBoat.startingPort).toBeFalsy();
  });
});

describe('Ships can dock at different Ports', () => {
  let port1, port2, bigBoat;
  test('The port object is instantiated', () => {
    port1 = new Port(jest.fn()); // Dummy parameter here
    bigBoat = new Ship(port1);
    expect(bigBoat.currentPort).toBe(port1);
    port2 = new Port('kingston upon hull');
    bigBoat.dock(port2);
    expect(bigBoat.currentPort).toBe(port2);
  });
});
