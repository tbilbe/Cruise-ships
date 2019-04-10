const Controller = require('../src/controller');

describe('the controller is created', () => {
  it('the controller is a function', () => {
    expect(new Controller()).toBeInstanceOf(Object);
  });
});