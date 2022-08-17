const eventCaps = require('./events');


eventCaps.addListener('newPackage', pickUp);
eventCaps.addListener('pickUp', inTransit);
eventCaps.addListener('inTransit', delivered);


function pickUp(payload) {

  setTimeout(() => {
    eventCaps.emit('pickUp', payload);
    console.log(`DRIVER picked up: ${payload.orderID}`);

  }, 1000);
}

function inTransit(payload) {

  setTimeout(() => {
    eventCaps.emit('inTransit', payload);
    console.log(`DRIVER in Transit: ${payload.orderID}`);

  }, 2000);
}

function delivered(payload) {

  setTimeout(() => {
    eventCaps.emit('delivered', payload);
    console.log(`DRIVER delivered: ${payload.orderID}`);

  }, 3000);
}


module.exports = {
  pickUp,
  inTransit,
  delivered,
}