function Ship(name, startingPort) {
  this.name = `HMS ${name}`;
  this.startingPort = startingPort;
  this.port = null;
}

Ship.prototype.sail = function (sailTo) {
  this.port = sailTo;
  return `Arrived at ${this.port}, you have docked safely.`;
};

module.exports = {
  Ship,
};
