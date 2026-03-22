const routeResponseMap = {
"/info": "<h1>Info Page</h1>",
"/contact": "<h1>Contact Us</h1>",
"/about": "<h1>Learn More About Us</h1>",
"/hello": "<h1>Say hello by emailing us <a href='mailto:you@example.com'>here</a></h1>",
"/error": "<h1>Page Not Found</h1>"
};

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
        if (routeResponseMap[req.url]){
            res.end(routeResponseMap[req.url])
        } else {
            res.end("<h1> Welcome </h1>")
        }
        console.log(`Sent a response: ${responseMessage}`);  
    });

app.listen(port);
console.log(`The server has started and is listening on port ${port}`);

const getJSONString = obj => {
    return JSON.stringify(obj,null,2);
};