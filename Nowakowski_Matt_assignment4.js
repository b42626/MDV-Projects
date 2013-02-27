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

// 3. Title-case a string (split into words, then uppercase the first letter of each word)

function fixCase(fixThis) {
 
 
    String.prototype.toProperCase = function () {
 
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
   
    fixThis.toProperCase();
    console.log(fixThis.toProperCase());
}

// 4. Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

function changeSeparator(changeThis) {
   
    if (changeThis) {
        return console.log("a/" + "b/" + "c/");
    }
}

// 5. Find the number of hours or days difference between two dates.

function daysPassed(date) {
    var halo4 = date;
    today = new Date(2013, 02, 27);
    var one_day = 1000 * 60 * 60 * 12;
    console.log(Math.ceil((today.getTime() - halo4.getTime()) / (one_day)) + " days have gone by since Halo 4 was released. " + date)
}

// 6. 





checkNum ("123-456-7890");
checkEmail("jubjub@gmail.com");
fixCase("donkey kong");
changeSeparator("a,b,c");
daysPassed(new Date(2012, 10, 06));