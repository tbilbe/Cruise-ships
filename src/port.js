function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function (shipName) {
  this.ships.push(shipName);
  return `please dock at dock number: ${this.ships.indexOf(shipName) + 1}`;
};
Port.prototype.removeShip = function (ship) {
  this.ships.splice(this.ships.indexOf(ship), 1);
};

module.exports = {
  Port,
};
