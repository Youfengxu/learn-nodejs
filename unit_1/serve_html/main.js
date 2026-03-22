const { error } = require("console");

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs =  require("fs");

const getViewUrl = (url) => {
    return `views${url}.html`
};

const sendErrorResponse = res => {
    res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
        "Content-Type": "text/html"
    });
    res.write("<h1> File Not Found!</h1>");
    res.end();
};

const routeMap = {
    "/": "views/index.html"
};

http.createServer((req,res) =>{
    let url = req.url;
    if (url.indexOf(".html") !== -1) {
        res.writeHead(httpStatus.StatusCodes.OK, {
            "Content-Type": "text/html"
        });
        customReadFile(`./views${url}`, res);
    } else if (url.indexOf(".js") !== -1) {
        res.writeHead(httpStatus.StatusCodes.OK, {
            "Content-Type": "text/javascript"
        });
        customReadFile(`./public/js${url}`, res)
    } else if (url.indexOf(".css") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/css"
      });
      customReadFile(`./public/css${url}`, res);
    } else if (url.indexOf(".png") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "image/png"
      });
      customReadFile(`./public/images${url}`, res);
    } else {
      sendErrorResponse(res);
    } 
}).listen(3000);

/*
http.createServer((req,res) => {
    let viewUrl = getViewUrl(req.url);
    fs.readFile(viewUrl, (error,data) => {
        if (error) {
            res.writeHead(httpStatus.StatusCodes.NOT_FOUND);
            res.write("<h1> File Not Found!</h1>");
        } else {
            res.writeHead(httpStatus.StatusCodes.OK, {
                "Content-Type": "text/html"});
                res.write(data);
        }
        res.end();
    });
}).listen(port);
*/

 /*   
    res.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html"
    });

    if (routeMap[req.url]){
        fs.readFile(routeMap[req.url], (error, data) => {
            res.write(data);
            res.end();
        }); 
    } else {
        res.end("<h1>Sorry, File not Found!</h1>");
    }
}).listen(port);
*/

console.log(`Server has started and is listening on port number: ${port}`);

const customReadFile = (path, res ) => {
    if (fs.existsSync(path)) {
        fs.readFile(path, (error, data) => {
            if (error) {
                console.log(error);
                res.write(error);
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
};