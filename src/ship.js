function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function () {
  this.currentPort = false;
  this.previousPort = this.itinerary.ports[0].name;
};

Ship.prototype.dock = function () {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
  this.currentPort = itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};


module.exports = {
  Ship,
};
