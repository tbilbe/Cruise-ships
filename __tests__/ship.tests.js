/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Ship } = require('../src/ship.js');
const { Port } = require('../src/port.js');
const { Itinerary } = require('../src/itinerary.js');

describe('A ship was built and christened', () => {
  let ship, port, itinerary;
  test('Before a ship sails it must have a port', () => {
    port = new Port('Dover');
    itinerary = new Itinerary(port);
    ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
});

describe('Setting Sail', () => {
  let rowBoat, mockPort, itinerary;
  test('Ship has to leave a port to set sail', () => {
    mockPort = new Port('Dover');
    itinerary = new Itinerary(mockPort);
    rowBoat = new Ship(itinerary);
    rowBoat.setSail();
    expect(rowBoat.startingPort).toBeFalsy();
  });
});

describe('Ships can dock at different Ports', () => {
  let port1, port2, bigBoat, itinerary;
  test('The port object is instantiated', () => {
    port1 = new Port('port1');
    port2 = new Port('kingston upon hull');
    itinerary = new Itinerary([port1, port2]);
    bigBoat = new Ship(itinerary);
    expect(bigBoat.currentPort).toBe(port1);
    bigBoat.setSail();
    console.log('bigBoat currentport should be false: ', bigBoat.currentPort);
    bigBoat.dock();
    console.log('after docking in port 2, check port 2 logs: ', port2.ships);
    expect(bigBoat.currentPort).toBe(port2);
    expect(port2.ships).toContain(bigBoat);
  });
});

describe('A ship gets added to a port when instantiated', () => {
  let portOfDover, bigShip, travelLog;
  beforeAll(() => {
    portOfDover = new Port('Dover');
    travelLog = new Itinerary(portOfDover);
    bigShip = new Ship(travelLog);
  });
  test('the travel log shows the port on instantiation', () => {
    expect(portOfDover.ships).toContain(bigShip);
  });
});
