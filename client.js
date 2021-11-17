const net = require('net');

const connect = function () { // establish connection with the game server
  const conn = net.createConnection({
    host: 'localhost', // replace 'localhost' with IP address if playing with someone else
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: AMC');
    console.log('Successfully connected to game server.');
  });

  conn.on('data', (data) => {
    console.log('Game Alert: ', data);
  });

  return conn;
};

module.exports = {
  connect
};