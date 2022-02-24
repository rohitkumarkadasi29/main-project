const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');
const cors = require('cors');

const fileRoute = require('./routes/file');
const users = require("./routes/users");

require('./db/db');


const app = express();

app.use(cors())

// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());

// // Passport middleware
// app.use(passport.initialize());

// // Passport config
// require("./db/passport");


// // Routes
// app.use(users);


// app.use(express.static(path.join(__dirname, '..', 'build')));
// app.use(fileRoute);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', '../public/index.html'));
// });

// app.listen(5000, () => {
//   console.log('server started on port 5000');
// });


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./db/db").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./db/passport")(passport);

// Routes
app.use("/routes/users", users);

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', '../public/index.html'));
});

app.get("/", (req, res, next) => {
  res.status(200).send("hello world");
});

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));