const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();
var responseMessage;
    app.on('request', (req, res) => {
        var body = [];
        req.on("data", (bodyData) => {
            body.push(bodyData);
        });
        req.on("end", () => {
            body = Buffer.concat(body).toString();
            console.log(`Request Body Content: ${body}`);
        });

        console.log("Received an incoming request!");
        console.log(req.method);
        console.log(req.url);
        console.log(getJSONString(req.headers));

        res.writeHead(httpStatus.StatusCodes.OK, {"Content-Type":"text/html"})
        if (req.url==='/contact'){
            responseMessage =  `<h1> You've requested for the page ${req.url}</h1>`;
        } else {
            responseMessage =  "<h1> Page not found</h1>";
        }
        res.write(responseMessage);
        res.end()
        console.log(`Sent a response: ${responseMessage}`);  
    });

app.listen(port);
console.log(`The server has started and is listening on port ${port}`);

const getJSONString = obj => {
    return JSON.stringify(obj,null,2);
};