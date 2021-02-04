const Validator = require("validator"),
      isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : ""

  if (Validator.isEmpty(data.name)){
    errors.name = "Please enter your name"
  }
    
  if (Validator.isEmpty(data.email)){
    errors.email = "Please enter your email address"
  } else if (!Validator.isEmail(data.email)){
    errors.email = "Please provide a valid email address"
  }

  if (Validator.isEmpty(data.password)){
    errors.password = "Please enter a password!"
  } else if (!Validator.isLength(data.password, {min: 6})){
    errors.password = "Password must be at least 6 characters"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
 }