const { isDate } = require('util/types');
const eventCaps = require('./events.js');
require('./vendor.js');
require('./driver.js');


eventCaps.emit('start');

eventCaps.addListener('pickUp', (payload) => {
  const date = Date.now();
  const todayTime = new Date(date).toUTCString();
  console.log(`
      EVENT: {\n
          event: "pickup",\n
          time: "${todayTime}",\n
          payload: {\n
              store: "${payload.store}", \n
              orderID: "${payload.orderID}", \n
              customer: "${payload.customer}", \n
              address: "${payload.address}", \n
          },
      }`);
});


eventCaps.addListener('inTransit', (payload) => {
  const date = Date.now();
  const todayTime = new Date(date).toUTCString();
  console.log(`
      EVENT: {\n
          event: "inTransit",\n
          time: "${todayTime}",\n
          payload: {\n
              store: "${payload.store}", \n
              orderID: "${payload.orderID}", \n
              customer: "${payload.customer}", \n
              address: "${payload.address}", \n
          },
      }`);
});

eventCaps.addListener('delivered', (payload) => {
  const date = Date.now();
  const todayTime = new Date(date).toUTCString();
  console.log(`
      EVENT: {\n
          event: "delivered",\n
          time: "${todayTime}",\n
          payload: {\n
              store: "${payload.store}", \n
              orderID: "${payload.orderID}", \n
              customer: "${payload.customer}", \n
              address: "${payload.address}", \n
          },
      }`);
});
module.exports = {
  eventCaps,
}
