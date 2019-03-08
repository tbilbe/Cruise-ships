function Ship(name, startingPort) {
  this.name = `HMS ${name}`;
  this.startingPort = startingPort;
  this.port = null;
}

Ship.prototype.setSail = function (sailTo) {
  this.startingPort = null;
  this.port = sailTo;
  return `Arrived at ${this.port}, you have docked safely.`;
};

function Port(name) {
  this.name = name;
}

module.exports = {
  Ship, Port,
};
