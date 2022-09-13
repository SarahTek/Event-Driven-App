const { io } = require('socket.io-client');
const socket = io('ws://localhost:3000/driver');


socket.on('orderForDriver', (payload) => {
  setTimeout(() => {
    console.log(`DRIVER picked up: ${payload.orderID}`);
    socket.emit('pickUp', payload);
  }, 1500);
});


socket.on('inTransit', (payload) => {
  setTimeout(() => {
    console.log(`DRIVER in Transit: ${payload.orderID}`);
    socket.emit('Driver-inTransit', payload);

  }, 1500);
});

socket.on('Driver-delivered', (payload) => {
  setTimeout(() => {
    console.log(`DRIVER delivered package: ${payload.orderID}`);
    socket.emit('delivered', payload);

  }, 4500);
});
