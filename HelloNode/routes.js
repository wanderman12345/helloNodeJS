const fs = require("fs");
//require is used to import file or module. If local ./ or / is used. If a core module neither is used

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Form Below</title></head>");
        res.write(
          '<body><form action="/message" method = "POST"><input type="text" name = "message"><button type = "submit">Send</button></form></body>'
        );
        res.write("</html");
        return res.end();
      }
      if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
        return req.on("end", () => {
          const parseBody = Buffer.concat(body).toString();
          const message = parseBody.split("=")[1];
          fs.writeFile("message.txt", message, err =>{
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
          });
        });
      }
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>My First Page </title></head>");
      res.write("<body><h1> Hello From My Own Node JS Server </h1></body>");
      res.write("</html");
      res.end();

}

module.exports = requestHandler;

