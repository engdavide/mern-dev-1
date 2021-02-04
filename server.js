const express = require("express"),
      mongoose = require("mongoose"),
      bodyParser = require ("body-parser"),
      passport = require("passport");

const userRoutes = require("./routes/api/users");

const app = express();


//Error Handling
app.use(function(err, req, res, next){

  console.error(err);
  res.status(500).send({ message: err.sqlMessage || err });

});

//BodyParser
app.use(
  bodyParser.urlencoded({
  extended: false
  })
);
app.use(bodyParser.json());

// DB
const db = require("./config/keys").mongoURI;
mongoose.connect(db, {useNewUrlParser: true}
  ) 
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport") (passport);
// Routes
app.use("/api/users", userRoutes);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`sup! 🚀 🚀  on port ${port}`))
