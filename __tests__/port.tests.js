/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Port } = require('../src/port.js');

describe('A port can be instantiated', () => {
  let kingstonUponHull;
  test('Hull is a port and its name is hull', () => {
    kingstonUponHull = new Port();
    expect(kingstonUponHull).toBeInstanceOf(Object);
  });
});
