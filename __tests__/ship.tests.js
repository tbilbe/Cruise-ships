/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Ship } = require('../src/ship.js');
const { Port } = require('../src/port.js');
const { Itinerary } = require('../src/itinerary.js');

describe('A ship', () => {
  let ship, port, itinerary, mockPort, mockCalais, rowBoat;
  beforeEach(() => {
    port = { addShip: jest.fn(), removeShip: jest.fn() };
    mockPort = { ...port, name: 'mockDover', ships: [] };
    mockCalais = { ...port, name: 'mockCalais', ships: [] };
    itinerary = new Itinerary([mockPort, mockCalais]);
    ship = new Ship(itinerary);
    rowBoat = new Ship(itinerary);
  });
  it('Before a ship sails it must have a port', () => {
    expect(ship.currentPort).toEqual(mockPort);
  });
  test('Ship has to leave a port to set sail', () => {
    rowBoat.setSail();
    expect(rowBoat.startingPort).toBeFalsy();
    expect(mockCalais.removeShip).toHaveBeenCalledWith(rowBoat);
  });
  test('Ships previous current port is not null after setting sail', () => {
    expect(rowBoat.previousPort).toBe(null);
    rowBoat.setSail();
    expect(rowBoat.currentPort).toBeFalsy();
    expect(rowBoat.previousPort).toBe(rowBoat.itinerary.ports[0]);
  });
  test('gets added to a port on instantiation', () => {
    expect(port.addShip).toHaveBeenCalledWith(rowBoat);
  });
  test('Ships can dock at different Ports', () => {

  });


  xdescribe('', () => {
    let port1, port2, bigBoat;
    test('Ships can dock at different Ports', () => {
      port1 = new Port('Dover');
      port2 = new Port('Calais');
      itinerary = new Itinerary([port1, port2]);
      bigBoat = new Ship(itinerary);
      bigBoat.setSail();
      bigBoat.dock();
    });
  });
  xdescribe('A ship gets added to a port when instantiated', () => {
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
