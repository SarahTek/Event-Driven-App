const events = require('./events.js');
const Chance = require('chance');

const chance = Chance();

events.addListener('start', CustPackage);
events.addListener('delivered', DeliveredPackage);


function CustPackage() {
  setInterval(() => {
    const company = chance.company();
    const orders = chance.integer({ min: 0, max: 1000000 });
    const name = chance.name();
    const city = chance.city();
    const state = chance.state();

    const order = {
      store: company,
      orderID: orders,
      customer: name,
      address: city + ', ' + state,

    }
    events.emit('newPackage', order);

  }, 10000);

}

function DeliveredPackage(payload) {
  setTimeout(() => {
    console.log(`Thank You, ${payload.customer}`);
  }, 1000);
}


module.exports = {
  CustPackage,
  DeliveredPackage
}
