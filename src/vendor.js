// const events = require('./events.js');
const { io } = require('socket.io-client');
const socket = io('ws://localhost:3000/vendor');
const Chance = require('chance');
const chance = Chance();



function CustPackage() {
  setInterval(() => {
    let store = chance.pickone(['acme-widets', '1-800-flowers'])
    // const company = chance.company();
    let orders = chance.integer({ min: 0, max: 1000000 });
    let name = chance.name();
    let city = chance.city();
    let state = chance.state();
    let alert = '';

    let payload = {
      store: store,
      orderID: orders,
      customer: name,
      address: city + ', ' + state,
      status: alert

    }
    socket.emit('newOrder', payload);

  }, 3000);

}

function DeliveredPackage() {
  socket.on('delivered-confirmation', payload => {
    setTimeout(() => {

      console.log(`Thank You, ${payload.customer} for your ${payload.orderID}`,);
    }, 3500);
  });


}

CustPackage();
DeliveredPackage();
