const cors = require('cors');
const exp = require('express');
const bp = require('body-parser');
const { success, error } = require('consola')
const { connect } = require('mongoose');
const passport = require('passport');

// Bring in the app constants
const { DB, PORT } = require("./config");

// Initialize the application
const app = exp();

// Call the middleware
app.use(cors());
app.use(bp.json());
app.use(passport.initialize())

// Bring in passport
require('./middlewares/passport')(passport);

// User Router Middleware
app.use("/api/users", require("./routes/users"));
app.use("/api/plantitems", require("./routes/plantItems"));

// Connect to the database

const startApp = async () => {
    try {
      // Connection With DB
      await connect(DB, {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
  
      success({
        message: `Successfully connected with the Database \n${DB}`,
        badge: true
      });
  
      // Start Listenting for the server on PORT
      app.listen(PORT, () =>
        success({ message: `Server started on PORT ${PORT}`, badge: true })
      );
    } catch (err) {
      error({
        message: `Unable to connect with Database \n${err}`,
        badge: true
      });
      startApp();
    }
  };

startApp();