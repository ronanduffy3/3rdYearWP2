const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {SECRET} = require('../config/index')


// Function to register the user

const userRegister = async(userDets, role, res) => {
    // Validation (username and email have to be unique)
    let usernameNotTaken = await validateUsername(userDets.username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `Username is already taken.`,
        success: false
      });
    }

    // Checks and returns a response for the email
    let emailNotRegistered = await validateEmail(userDets.email);
    if (!emailNotRegistered) {
      return res.status(400).json({
        message: `Email is already registered.`,
        success: false
      });
    }

    // Hash the password
    const hashed = await bcrypt.hash(userDets.password, 12);

    // Create the user

    const newUser = new User({
        ...userDets,
        password: hashed,
        role
    })

    // Save the user
    await newUser.save();

    // Return the message in json
    return res.status(201).json({
        message: "User created successfully"
    });

    /*
    *  TODO - ADD TRY CATCH
    */


};

const userLogin = async(userCredentials, role, res) => {

    let {username, password} = userCredentials;

    // Find the username in the database 
    const user = await User.findOne({username});
    if(!user){
        return res.status(404).json({
            message: "Username does not exist.",
            success: false
        });
    }

    // Check that the role is correct
    if(user.role != role){
        return res.status(404).json({
            message: "Role doesn't match, are you logging in from the correct portal",
            success: false
        });
    }

    // Check that the password matches the one in the user
    let isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
        // Sign in the token and issue
        let token = jwt.sign({
            user_id: user.id,
            role: user.role,
            username: user.username,
            email: user.email
        }, SECRET, {expiresIn: "7 days"});

        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168
        };

        return res.status(200).json({
            ...result, 
            message: "You are now logged in",
            success: true
        })
        }
        else{
        return res.status(404).json({
            message: "Incorrect password",
            success: false
        });
        }
    

}

const serializeUser = user => {
    return{
        username: user.username,
        email: user.email,
        name: user.name,
        _id : user._id,
        createdAt: user.createdAt
    }
}

const validateUsername = async username => {
    let user = await User.findOne({ username });
    console.log("Validated");
    return user ? false : true;
  };
  

  const validateEmail = async email => {
    let user = await User.findOne({ email });
    console.log("Validated");
    return user ? false : true;

  };
  
const userAuth = passport.authenticate("jwt", { session: false });

const checkRole = roles => (req, res, next) => {
    if(roles.includes(req.user.role)){
        next()
    }
    else{
        return res.status(401).json({
            message: "Unauthorized in role",
            success: false
        })
    }
}

// Export the function 
module.exports = {
    userRegister,
    userLogin,
    checkRole,
    userAuth,
    serializeUser
}