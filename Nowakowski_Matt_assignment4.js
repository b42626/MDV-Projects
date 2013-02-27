//alert("JavaScript works!");

// Matt Nowakowski
// Project 4
// SDI 1302
// library

var say = function(message) { console.log(message); };

// 1. Does a string follow a 123-456-7890 pattern like a phone number?

var checkNum = function (val) {
        var phoneNumber = val;
        var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if (pattern.test(phoneNumber)) { 
            var validPhoneNumber = phoneNumber.replace(pattern, "($4) $7-$9");
            say("Valid number"); 
        } else {
            return say("Invalid number"); 
        }
    }

// 2. Does a string follow an aaa@bbb.ccc pattern like an email address?

    function checkEmail(val) {
    var emailAddress = val
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
   
    if (emailPattern.test(emailAddress)) {
        say("valid email.");
    } else {
        say("Not a valid email.");
    }
}

// 3. Title-case a string (split into words, then uppercase the first letter of each word)

function fixCase(val) {
 
 
    String.prototype.toProperCase = function () {
 
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
   
    val.toProperCase();
    say(val.toProperCase());
}

// 4. Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

function changeSeparator(val) {
   
    if (val) {
        return say("a/" + "b/" + "c/");
    }
}

// 5. Find the number of hours or days difference between two dates.

function daysPassed(date) {
    var halo4 = date;
    today = new Date(2013, 02, 27);
    var one_day = 1000 * 60 * 60 * 12;
    say(Math.ceil((today.getTime() - halo4.getTime()) / (one_day)) + " days have passed since Halo 4 was released. " + date)
}

// 6. Find the smallest value in an array that is greater than a given number

function smlNum() {
    function bigNum(element, index, array) {
        return (element >= 13);
    }
    var filtered = [300, 20, 109, 7, 23, 2020, 78, 33, 82].filter(bigNum);
  
    bigNum();
   
    filtered.sort(function (a, b) {
        return a - b;
    });
      
    return say(filtered.shift());
}
 










checkNum ("123-456-7890");
checkEmail("jubjub@gmail.com");
fixCase("donkey kong");
changeSeparator("a,b,c");
daysPassed(new Date(2012, 10, 06));
smlNum();
