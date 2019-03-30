/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Port = require('../src/port.js');


describe('A port can be instantiated', () => {
  let kingstonUponHull, littlePort, tugBoat, ferry, pirateShip, bigPort;
  test('Hull is a port and its name is hull', () => {
    kingstonUponHull = new Port();
    expect(kingstonUponHull).toBeInstanceOf(Object);
  });
  beforeEach(() => {
    littlePort = new Port('lP');
    tugBoat = jest.fn();
  });
  test('littlePort only has a tugBoat there', () => {
    expect(littlePort.ships.length).toBe(0); // circular ref here - but port does not know of ship
    littlePort.addShip(tugBoat);
    expect(littlePort.ships.length).toBe(1); // have to use method to add to the ships array
  });
  test('littlePort has another ship there', () => {
    littlePort.addShip(tugBoat);
    littlePort.addShip(ferry);
    expect(littlePort.ships).toEqual([tugBoat, ferry]);
  });
  describe('Removing ships from the port', () => {
    test('the remove method', () => {
      bigPort = new Port('lP');
      tugBoat = jest.fn();
      ferry = jest.fn();
      pirateShip = jest.fn();
      bigPort.addShip(tugBoat);
      bigPort.addShip(ferry);
      bigPort.addShip(pirateShip);
      expect(bigPort.ships.length).toBe(3);
      bigPort.removeShip(pirateShip);
      expect(bigPort.ships.length).toBe(2);
    });
  });
});
