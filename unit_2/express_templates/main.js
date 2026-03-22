const homeController = require("./controllers/homeController");
const express = require("express");
const layouts = require("express-ejs-layouts");
app = express();
app.set("view engine", "ejs");
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(layouts);
app.use((req,res,next) => {
    console.log(`request made to ${req.url}`);
    next();
});

app.post("/", homeController.simplePost);
app.get("/", homeController.getRoot);
app.get("/items/:vegetable", homeController.sendReqParams);
app.post("/contact", homeController.postContact);
app.post("/signup", homeController.userSignUp)
app.get("/name/:myName", homeController.getName);
app.get("/contact", homeController.getContact);
app.set("port", 3000);

app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started listening on port numer: ${app.get("port")}`);
});