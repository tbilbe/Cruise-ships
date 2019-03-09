function Ship(currentPort) {
  this.currentPort = currentPort;
}

Ship.prototype.setSail = function (sailTo) {
  this.startingPort = null;
  this.port = sailTo;
  return `Arrived at ${this.port}, you have docked safely.`;
};

Ship.prototype.dock = function (port) {
  this.port = port;
};


module.exports = {
  Ship,
};
