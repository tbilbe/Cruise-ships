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

    // is render ports doing more than one thing here?
    /*
    The act of rendering a port is one thing, but to acheive this
    we have to do multiple 'things' ...?
    */
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

    setSail() {
      const ship = this.ship;
      const portIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = portIndex + 1;
      const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
      const shipElement = document.querySelector('#ship');

      if (!nextPortElement) {
        return alert('End of the line!');
      }

      ship.setSail();
      const sailInterval = setInterval(() => {
        const shipArrival = parseInt(shipElement.style.left, 10);
        if (shipArrival === nextPortElement.offsetLeft - 32) {
          clearInterval(sailInterval);
          ship.dock();
        } else {
          shipElement.style.left = `${shipArrival + 1}px`;
        }
      }, 15);
    }

    renderMessage(message) {
      const viewport = document.querySelector('#viewport');
      const messageBox = document.createElement('div');
      messageBox.setAttribute('id', 'message');
      messageBox.innerHTML = message;
      viewport.appendChild(messageBox);

      console.log('hook up');
    }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
