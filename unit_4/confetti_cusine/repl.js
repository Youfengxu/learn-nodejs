const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
mongoose.connect(
  "mongodb://localhost:27017/recipe_db"
);
mongoose.connection.on("open", () => {                    
  mongoose.connection.dropCollection("subscribers");           
  mongoose.connection.dropCollection("courses");
  mongoose.connection.dropCollection("users");               
}); 

mongoose.Promise = global.Promise;
/*
Subscriber.create({
  name: "Jon",
  email: "jon@jonwexler.com",
  zipCode: "12345"
})
  .then(subscriber => console.log(subscriber))
  .catch(error => console.log(error.message));

Subscriber.create({
  name: "Paul",
  email: "paul@jonwexler.com",
  zipCode: "12345"
})
  .then(subscriber => console.log(subscriber))
  .catch(error => console.log(error.message));

var testSubscriber;
Subscriber.findOne({
  name: "Jon"
}).then(result => {
  testSubscriber = result;
  console.log(testSubscriber.getInfo());
});
*/

const Course = require("./models/course");
/*
var testCourse;
Course.create( {
  title: "Tomato Land",
  description: "Locally farmed tomatoes only",
  zipCode: 12345,
  items: ["cherry", "heirloom"]
}).then(course => testCourse = course);

testSubscriber.courses.push(testCourse._id);
testSubscriber.save();
Subscriber.populate(testSubscriber, "courses").then(subscriber =>
  console.log(subscriber)
);
*/

//  1. Create 12 subscribers:
  const names = ["Alice","Bob","Carol","Dave","Eve","Frank","Grace","Hank","Iris","Jack","Karen","Leo"];
  names.forEach(name => {
    Subscriber.create({ name, email:
  `${name.toLowerCase()}@email.com`, zipCode: 10001 });
  });

 // 2. Create 6 courses:
  const titles = ["Tomato Land","Pasta basics","Knife skills","Bread baking","Soups","Desserts"];
  titles.forEach(title => {
    Course.create({ title, description: `Learn about ${title}`,
  zipCode: 10001 });
  });

 // 3. Randomly associate each subscriber to a course:
  Promise.all([Subscriber.find(),
  Course.find()]).then(([subscribers, courses]) => {
    subscribers.forEach(subscriber => {
      subscriber.courses.push(courses[Math.floor(Math.random() *
  courses.length)]._id);
      subscriber.save();
    });
  });

  const User = require("./models/user");
  var testUser;
  User.create({
    name: {
      first: "jon",
      last: "Wexler1"
    },
    email: "jon@jonwexler2.com",
    password: "password1"
  })
    .then(user => {
      testUser = user;
      return Subscriber.findOne({
        email: user.email
      });  
    })
    .then(subscriber => {
      testUser.subscribedAccount = subscriber;
      testUser.save(). then(user => console.log("user updated"))
    })
    .catch(error => console.log(error.message));

