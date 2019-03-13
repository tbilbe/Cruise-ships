/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Ship } = require('../src/ship.js');
const { Port } = require('../src/port.js');
const { Itinerary } = require('../src/itinerary.js');

xdescribe('A ship was built and christened', () => {
  let ship, port, itinerary;
  test('Before a ship sails it must have a port', () => {
    port = new Port('Dover');
    itinerary = new Itinerary(port);
    ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
});

xdescribe('Setting Sail', () => {
  let rowBoat, mockPort, itinerary;
  xtest('Ship has to leave a port to set sail', () => {
    mockPort = new Port('Dover');
    itinerary = new Itinerary(mockPort);
    rowBoat = new Ship(itinerary);
    rowBoat.setSail();
    expect(rowBoat.startingPort).toBeFalsy();
  });
  xtest('Ships previous current port is not null after setting sail', () => {
    mockPort = new Port('Hull');
    itinerary = new Itinerary(mockPort);
    rowBoat = new Ship(itinerary);
    expect(rowBoat.previousPort).toBe(null);
    rowBoat.setSail();
    expect(rowBoat.currentPort).toBeFalsy();
    expect(rowBoat.previousPort).toBe(mockPort.name);
  });
});

describe('Ships can dock at different Ports', () => {
  let port1, port2, bigBoat, itinerary;
  test('The port object is instantiated', () => {
    port1 = new Port('Dover');
    port2 = new Port('Calais');
    itinerary = new Itinerary([port1, port2]);
    bigBoat = new Ship(itinerary);
    // expect(bigBoat.currentPort).toEqual(port1);
    bigBoat.setSail();
    bigBoat.dock();
    console.log('IN TEST: bigBoat.currentPort = port2', bigBoat.currentPort);
    // expect(bigBoat.currentPort).toEqual(port2);
    // expect(port2.ships).toContain(bigBoat);
  });
});


describe('A ship gets added to a port when instantiated', () => {
  let portOfDover, bigShip, travelLog;
  beforeAll(() => {
    portOfDover = new Port('Dover');
    travelLog = new Itinerary([portOfDover]);
    bigShip = new Ship(travelLog);
  });
  test.skip('the travel log shows the port on instantiation', () => {
    expect(portOfDover.ships).toContain(bigShip);
  });
});
