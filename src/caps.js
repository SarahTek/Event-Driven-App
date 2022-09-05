// const { isDate } = require('util/types');
const socketIo = require('socket.io');
const io = socketIo(3000);
const vendor = io.of("./vendor");
const driver = io.of("./driver");



// function start() {
io.on("connection", (client) => {



    vendor.on('connection', (client) => {
        client.on('newOrder', (payload) => {
            console.log('SockettttttId:', client.id);
            client.join(payload.store);
            console.log('create a new room', payload.store);
            eventLogger(payload, 'pickUp');
            driver.emit('orderForPickup', payload);
        });
    });

    driver.on('connection', (client) => {
        client.on('pickUp', (payload) => {
            client.emit('in-transit', payload);
        });
        // eventLogger(payload, 'pickUp');

        client.on('order-in-transit', (payload) => {
            eventLogger(payload, 'in-transit');
            client.emit('order-delivered', payload);
        });

        client.on('package-delivered', (payload) => {
            setTimeout(() => {
                eventLogger(payload, 'delivered');
            }, 3000);
            vendor.emit('delivered-confirmation', payload);
        });
    });



    function eventLogger(payload, str) {
        const date = Date.now();
        const todayTime = new Date(date).toUTCString();
        console.log(`
      EVENT: {\n
          event: "${str}",\n
          time: "${todayTime}",\n
          payload: {\n
              store: "${payload.store}", \n
              orderID: "${payload.orderID}", \n
              customer: "${payload.customer}", \n
              address: "${payload.address}", \n
          },
      }`);
    }
});

        // start();
