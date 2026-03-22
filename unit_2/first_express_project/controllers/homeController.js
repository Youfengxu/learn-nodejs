exports.sendReqParams = (req,res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
}

exports.simplePost = (req,res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!!");
}

exports.getRoot = (req, res) => {
    res.send("Hello, Universe!");
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
}

exports.postContacts = () => {
    res.send("Contact information submitted successfully!");    
}

exports.userSignUp = (req,res) => {
    console.log(req.body);
    res.send("Sign Up Completed!");
}