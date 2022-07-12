//require is used to import file or module. If local ./ or / is used. If a core module neither is used

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
});

//During production default is set.

server.listen(3000);






