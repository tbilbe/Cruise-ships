/* eslint-disable no-undef */
const { Itinerary } = require('../src/itinerary.js');

describe('itinerary', () => {
  let port, port1, port2, ports, itinerary;
  beforeEach(() => {
    port = { addShip: jest.fn(), removeShip: jest.fn() };
    port1 = { ...port, name: 'port1', ships: [] };
    port2 = { ...port, name: 'port2', ships: [] };
    ports = [port1, port2];
    itinerary = new Itinerary(ports);
  });
  it('Instantiate Object', () => {
    expect(itinerary).toBeInstanceOf(Itinerary);
  });
  it('has ports', () => {
    expect(itinerary.ports).toEqual([port1, port2]);
  });
});
