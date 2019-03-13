/* eslint-disable no-console */

function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  console.log('currentPort inside the ship constructor: ', this.currentPort);
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function () {
  // const index = itinerary.ports.indexOf(this.currentPort);
  this.currentPort = null;
  this.previousPort = this.itinerary.ports[0];
};

Ship.prototype.dock = function () {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
  // console.log('prevPort called in dock funct: ', previousPortIndex);
  // console.log('itinerary.ports[1] in dock funct: ', itinerary.ports);
  this.currentPort = itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};


module.exports = {
  Ship,
};
