/* eslint-disable no-console */

class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  setSail() {
    this.currentPort = null;
    this.previousPort = this.itinerary.ports[0];
    this.previousPort.removeShip(this);
  }

  dock() {
    const itinerary = this.itinerary;
    const prevPortIndex = itinerary.ports.indexOf(this.previousPort);
    this.currentPort = itinerary.ports[prevPortIndex + 1];
    this.currentPort.addShip(this);
  }
}

module.exports = {
  Ship,
};
