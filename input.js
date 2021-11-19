const net = require('net');

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
  if (key === '\u0003') { // ctrl+C to exit game
    process.exit();
  }
  if (key === '\u0077' || key === '\u0057') { // w or W to move "up"
    connection.write('Move: up');
  }
  if (key === '\u0061' || key === '\u0041') { // a or A to move "left"
    connection.write('Move: left');
  }
  if (key === '\u0073' || key === '\u0053') { // s or S to move "down"
    connection.write('Move: down');
  }
  if (key === '\u0064' || key === '\u0044') { // d or D to move "right"
    connection.write('Move: right');
  }
  if (key === '\u0062' || key === '\u0042') { // b or B to display message to other players
    connection.write('Say: I IZ DA BEST');
  }
  if (key === '\u0068' || key === '\u0048') { // h or H to display message to other players
    connection.write('Say: HAHA, 2 SLOW!!');
  }
};

module.exports = { setupInput };