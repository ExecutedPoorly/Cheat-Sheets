
///////////////////// ROUTE HANDLERS /////////////////
// checkout(),  copy(),     delete(),     get(),      head(), 
// lock(),      merge(),    mkactivity(), mkcol(),    move(), 
// m-search(),  notify(),   options(),    patch(),    post(), 
// purge(),     put(),      report(),     search(),   subscribe(), 
// trace(),     unlock(),   unsubscribe()
//////////////////////////////////////////////////////
app.get("/", function (req, res) { // get http request received, result sent back.
  res.send("Hello World!");
});

app.all('/secret', function (req, res, next) {//will be called in response to any HTTP method targeting '/secret'

})
////////////////////////////Separating routes into separate files./////////////////////
// wiki.js - Wiki route module
const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router; //allows you to import these routes.

//other file importing routes.

const wiki = require("./wiki.js");
// …
app.use("/wiki", wiki); //uses routes in wiki.js

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\Separating routes into separate files.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////////MIDDLEWARE FUNCTION ////////////////////////////////////////////////////////////////
const a_middleware_function = function (req, res, next) {
  some_meaningful_code;
  next(); // Call next() so Express will call the next middleware function in the chain.
};

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use("/someroute", a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get("/", a_middleware_function);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////////STATIC PAGES///////////////////////////////////////////////////////////////////////////

app.use(express.static("."));      // 
app.use(express.static("public")); // Any files in the public directory are served by addting their filename (relative to the public directory).
app.use("/media", express.static("public"));  // adds /media/ to the url path in addition to the above.

///////////////////////////                         ERRORS                /////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

app.use(function (err, req, res, next) { //must be last app.use() catches errors.
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

///////////////////////////                         ERRORS                /////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ MONGODB \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const MongoClient = require("mongodb").MongoClient; //imports mongodb

MongoClient.connect("mongodb://localhost:27017/animals", (err, client) => { //connects to local animal db
  if (err) throw err;

  const db = client.db("animals"); //animal database
  db.collection("mammals") //mammals collection inside db
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});

///////////////////////////                         MONGODB                /////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Rendering data (views)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
////
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" }); //renders index.js and passes title and message variables.
});
