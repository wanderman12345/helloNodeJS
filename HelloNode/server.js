const http = require("http");

const routes = require('./routes');

const server = http.createServer(routes);

//During production default is set.

server.listen(3000);
