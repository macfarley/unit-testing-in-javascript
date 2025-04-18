// validate an email address
function validateEmail(email) {
  // Check if the email contains the '@' symbol and a '.'
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
}

// validate a password on complexity requirements
function validatePassword(password) {
  return password.length >= 8;
}

// validate a phone number
function validatePhoneNumber(phoneNumber) {
  const re = /^\d{10}$/;
  return re.test(phoneNumber);
}

// Validate Username
function validateUsername(username){
  //return false if username not a string
  if(typeof username !== 'string'){
    return false
  }
//return false if username too short
  if(username.length < 3){
    return false
  }
  return true
}

module.exports = {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateUsername
};
