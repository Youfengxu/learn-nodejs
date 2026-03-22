const homeController = require("./controllers/homeController");
const port = 3000,
    express = require("express"),
    app = express();

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use((req,res,next) => {
    console.log(`request made to ${req.url}`);
    next();
});

app.post("/", homeController.simplePost);
app.get("/", homeController.getRoot);
app.get("/items/:vegetable", homeController.sendReqParams);
app.post("/contact", homeController.postContacts);
app.post("/signup", homeController.userSignUp)

app.listen(port, () => {
    console.log(`The Express.js server has started listening on port numer: ${port}`);
});