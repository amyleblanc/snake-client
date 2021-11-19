const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () { // establish connection with the game server
  const conn = net.createConnection({ ...IP, ...PORT });
  // {
  //   host: 'localhost', // replace 'localhost' with IP address if playing with someone else
  //   port: 50541
  // });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: AMC');
    console.log('Successfully connected to game server.');
    // conn.write('Move: up'); // play around with sending "move" commands
    // let interval = setInterval(() => {
    //   conn.write('Move: up');
    // }, 100);
  });

  conn.on('data', (data) => {
    console.log('Game Alert: ', data);
  });

  return conn;
};

module.exports = {
  connect
};