const net = require('net');
// const { connect } = require('./client');

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077' || key === '\u0057') { // w or W
    connection.write('Move: up');
  }
  if (key === '\u0061' || key === '\u0041') { // a or A
    connection.write('Move: left');
  }
  if (key === '\u0073' || key === '\u0053') { // s or S
    connection.write('Move: down');
  }
  if (key === '\u0064' || key === '\u0044') { // d or D
    connection.write('Move: right');
  }
  if (key === '\u0062' || key === '\u0042') { // b or B
    connection.write('Say: I IZ DA BEST');
  }
  if (key === '\u0068' || key === '\u0048') { // h or H
    connection.write('Say: HAHA, 2 SLOW!!');
  }
};

module.exports = { setupInput };