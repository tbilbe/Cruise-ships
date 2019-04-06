(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
      this.initialiseSea();
      document.querySelector('#setSailButton').addEventListener('click', () => this.setSail());
    }

    initialiseSea() {
      const backgrounds = ['./images/water0.png', './images/water1.png'];
      let backgroundIndex = 0;

      window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;
      }, 1000);
    }

    renderPorts(ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';
      ports.forEach((port, ind) => {
        const portDiv = document.createElement('div');
        portDiv.setAttribute('class', 'port');
        portDiv.dataset.portIndex = ind;
        portDiv.dataset.portName = port.name;
        portsElement.appendChild(portDiv);
        const portsElWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElWidth + 256}px`;
      });
    }

    renderShip() {
      const ship = this.ship;
      const portIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portEl = document.querySelector(`[data-port-index='${portIndex}']`);
      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${portEl.offsetTop + 32}px`;
      shipElement.style.left = `${portEl.offsetLeft - 32}px`;
    }

    renderMessage(message) {
      const viewport = document.querySelector('#viewport');
      const messageBox = document.createElement('div');
      messageBox.setAttribute('id', 'message');
      messageBox.innerHTML = message;
      viewport.appendChild(messageBox);
      window.setTimeout(() => viewport.removeChild(messageBox), 2000);
    }

    setSail() {
      const ship = this.ship;
      const portIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = portIndex + 1;
      const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
      const shipElement = document.querySelector('#ship');

      ship.setSail();

      if (!nextPortElement) {
        return this.renderMessage('You have finished sailing, please leave. Captains orders.');
      }
      const departMsg = `Now departing ${ship.previousPort.name}`;
      this.renderMessage(departMsg);

      const sailInterval = setInterval(() => {
        const shipArrival = parseInt(shipElement.style.left, 10);
        if (shipArrival === nextPortElement.offsetLeft - 32) {
          clearInterval(sailInterval);
        } else {
          shipElement.style.left = `${shipArrival + 1}px`;
        }
      }, 20);
      ship.dock();
      const arrivalMsg = `Now arriving at ${ship.currentPort.name}`;
      window.setTimeout(() => {
        this.renderMessage(arrivalMsg);
      }, 2000);
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
