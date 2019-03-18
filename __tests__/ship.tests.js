/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Ship } = require('../src/ship.js');
const { Port } = require('../src/port.js');
const { Itinerary } = require('../src/itinerary.js');

describe('A ship was built and christened', () => {
  let ship, port, itinerary;
});
describe('A ship', () => {
  let ship, port, itinerary;
  beforeEach(() => {
    port = new Port('Dover');
    itinerary = new Itinerary([port]);
    ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  it('Before a ship sails it must have a port', () => {
    expect(ship.currentPort).toEqual(port);
  });
  describe('Setting Sail', () => {
    let rowBoat, mockPort;
    test('Ship has to leave a port to set sail', () => {
      mockPort = new Port('Dover');
      itinerary = new Itinerary([mockPort]);
      rowBoat = new Ship(itinerary);
      rowBoat.setSail();
      expect(rowBoat.startingPort).toBeFalsy();
    });
    test('Ships previous current port is not null after setting sail', () => {
      mockPort = new Port('Hull');
      itinerary = new Itinerary([mockPort]);
      rowBoat = new Ship(itinerary);
      expect(rowBoat.previousPort).toBe(null);
      rowBoat.setSail();
      expect(rowBoat.currentPort).toBeFalsy();
      expect(rowBoat.previousPort).toBe(rowBoat.itinerary.ports[0]);
    });
  });
  describe('Ships can dock at different Ports', () => {
    let port1, port2, bigBoat;
    test('The port object is instantiated', () => {
      port1 = new Port('Dover');
      port2 = new Port('Calais');
      itinerary = new Itinerary([port1, port2]);
      bigBoat = new Ship(itinerary);
      bigBoat.setSail();
      bigBoat.dock();
    });
  });
  describe('A ship gets added to a port when instantiated', () => {
    let portOfDover, bigShip, travelLog;
    beforeAll(() => {
      portOfDover = new Port('Dover');
      travelLog = new Itinerary([portOfDover]);
      bigShip = new Ship(travelLog);
    });
    test('the travel log shows the port on instantiation', () => {
      expect(portOfDover.ships).toContain(bigShip);
    });
  });
});
