function Ship(port) {
  this.currentPort = port;
}

Ship.prototype.setSail = function (sailTo) {
  this.port = sailTo;
  return `Arrived at ${this.port}, you have docked safely.`;
};

Ship.prototype.dock = function (port) {
  this.currentPort = port;
};


module.exports = {
  Ship,
};
