/* eslint-disable no-console */
(function exportShip() {
  class Ship {
    constructor(itinerary) {
      this.itinerary = itinerary;
      this.currentPort = itinerary.ports[0];
      this.previousPort = null;
      this.currentPort.addShip(this);
    }

    setSail() {
      this.previousPort = this.currentPort;
      this.currentPort = '';
      this.previousPort.removeShip(this);
    }

    dock() {
      const itinerary = this.itinerary;
      const prevPortIndex = itinerary.ports.indexOf(this.previousPort);
      this.currentPort = itinerary.ports[prevPortIndex + 1];
      this.currentPort.addShip(this);
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Ship };
  } else {
    window.Ship = Ship;
  }
})();
