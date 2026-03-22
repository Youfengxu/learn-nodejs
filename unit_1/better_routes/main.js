const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router"),
    fs =  require("fs"),
    plainContentType = {
        "Content-Type": "text/plain"
    },
    htmlContentype = {
        "Content-Type": "text/html"
    };

const customReadFile = (file, res ) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            res.end(error);
            console.log("Error reading file...");
        }
        res.end(data);
    });
};
    

router.get("/", (req,res) => {
    res.writeHead(httpStatus.StatusCodes.OK, plainContentType);
    res.end("INDEX");
});
router.get("/index.html", (req,res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentype);
    customReadFile("views/index.html",res);
});
router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});

http.createServer(router.handle).listen(3000);
console.log(`Server has started and is listening on port number: ${port}`);

