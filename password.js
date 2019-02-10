//Write a program named password.js that
//takes a single string as a command line argument.
var passwordInput = process.argv[2];


//Within your program, write a function definition for a function named obfuscate
//that takes a string as an argument and obfuscates it by applying the following rules.
function obfuscate(passwordInput) {

  var output = "";

  for (var i = 0; i < passwordInput.length; i++) {

    //Every "a" in the string should be replaced with a "4".
    if (passwordInput[i] === "a") {
      output += "4";
    }
    //Every "e" in the string should be replaced with a "3".
    else if (passwordInput[i] === "e") {
      output += "3";
    }
    //Every "o" (oh) in the string should be replaced with a "0" (zero).
    else if (passwordInput[i] === "o") {
      output += "0";
    }
    //Every "l" (el) in the string should be replaced with a "1" (one).
    else if (passwordInput[i] === "l") {
      output += "1";
    }
    else {
      output += passwordInput[i];
    }

  }

  return output;

}

//The program should log to the console the final obfuscated password returned by your obfuscate function.
console.log(obfuscate(passwordInput));