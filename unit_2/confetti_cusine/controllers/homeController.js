exports.showHome = (req,res) => {
    res.render("index");
}

exports.showCourses = (req,res) => {
    res.render("courses");
};

exports.showSignUp = (req,res) => {
    res.render("contact");
};

exports.postSignUp = (req,res) => {
    res.render("thanks");
};

exports.showCourses = (req,res) => {
    res.render("courses", {offeredCourses: courses});
}

var courses = [{
        title: "Event Drive Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 100
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 25
    }];