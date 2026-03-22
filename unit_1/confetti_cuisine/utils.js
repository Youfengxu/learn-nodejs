const fs =  require("fs"),
    httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes");

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {                
                res.writeHead(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end(httpStatus.getReasonPhrase(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR));
            }
            res.end(data);
            });
        }
    };
