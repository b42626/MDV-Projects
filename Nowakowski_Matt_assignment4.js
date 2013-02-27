//alert("JavaScript works!");

// Matt Nowakowski
// Project 4
// SDI 1302
// library

var say = function(message) { console.log(message); };

// 1. Does a string follow a 123-456-7890 pattern like a phone number?

var checkNum = function (testNumber) {
        var phoneNumber = testNumber;
        var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if (pattern.test(phoneNumber)) { 
            var validPhoneNumber = phoneNumber.replace(pattern, "($4) $7-$9");
            say("Valid number"); 
        } else {
            return say("Invalid number"); 
        }
    }

// 2. Does a string follow an aaa@bbb.ccc pattern like an email address?

    function checkEmail(emailToCheck) {
    var emailAddress = emailToCheck
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
   
    if (emailPattern.test(emailAddress)) {
        say("valid email.");
    } else {
        say("Not a valid email.");
    }
}


checkNum ("123-456-7890");
checkEmail("jubjub@gmail.com");
