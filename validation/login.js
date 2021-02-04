const Validator = require("validator"),
      isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : ""

    
  if (Validator.isEmpty(data.email)){
    errors.email = "Please enter your email address"
  } else if (!Validator.isEmail(data.email)){
    errors.email = "Please provide a valid email address"
  }

  if (Validator.isEmpty(data.password)){
    errors.password = "Please enter a password!"
  } 

  return {
    errors,
    isValid: isEmpty(errors)
  }
 }