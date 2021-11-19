const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () { // establish connection with the game server
  const conn = net.createConnection({ ...IP, ...PORT });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: AMC'); // insert initials to be displayed over player's snake
    console.log('Successfully connected to game server.');
  });

  conn.on('data', (data) => {
    console.log('Game Alert: ', data); // displays messages from the server to the player
  });

  return conn;
};

module.exports = { connect };