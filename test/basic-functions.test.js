const { expect } = require("chai");
const { validateEmail, validateUsername,  validatePassword} = require("../src/basic-functions.js");



  it("should return true for a valid email", () => {
    const validEmail = "test@example.com";
    const result = validateEmail(validEmail);
    expect(result).to.be.true; // Chai assertion
  });

//Validate Username
//Must be at least 3 characters
// no numbers
it('Should return true if at least 3 characters',()=>{
    const testName = 'whateverMan'
    const result = validateUsername(testName);

    expect(result).to.be.true;
});


//Validate Password
//must be at least 8 characters
it('Should return false if Password is too short',()=>{
    const testShort = 'blah';
    const result = validatePassword(testShort);

    expect(result).to.be.false
})
it('Should return true if Password >= 8 characters', () => { 
   const goodPassword = 'niceandlong';
   const result = validatePassword(goodPassword);

   expect(result).to.be.true;
});

describe("Tests For: validatePhoneNumber function", () => {
    // test case 1
    it("should return true for a valid phone number", () => {
      const validPhoneNumber = "1234567890";
      const result = validatePhoneNumber(validPhoneNumber);
      expect(result).to.be.true;
    });
    // test case 2
    it("should return false for a phone number with a length other than 10 digits", () => {
      const invalidPhoneNumber = "123456789";
      const result = validatePhoneNumber(invalidPhoneNumber);
      expect(result).to.be.false;
    });
    // test case 3
    it("should return false for a phone number with non-digit characters", () => {
      const invalidPhoneNumber = "123abc4567";
      const result = validatePhoneNumber(invalidPhoneNumber);
      expect(result).to.be.false;
    });
  });
  