//create instance of express object
const express = require("express"),
    app = express();

//set app configuration
app.set("port", process.env.PORT || 3000);

//load json and urlencoded Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//serve static files from public directory
app.use(express.static("public"));

//load ejs-layout module, set view engine to ejs and load middleware
const layouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(layouts);

//add custom middleware
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
//set default route
app.get("/", homeController.showHome);

//Add routes
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postSignUp);

//Add error routes
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

//establish app server
app.listen(app.get("port"), () => {
    console.log(`Server running at http://100.109.62.78:${app.get("port")}`);
});