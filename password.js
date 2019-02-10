// takes a single string as a command line argument.
var passwordInput = process.argv[2];
// function named obfuscate that obfuscates input by applying the following rules:
function obfuscate(passwordInput) {
  var letterArray = passwordInput.split("");
  var output = "";
  letterArray.forEach(function(letter) {
    // Every "a" in the string should be replaced with a "4".
    if (letter === "a") {
      output += "4";
    }
    // Every "e" in the string should be replaced with a "3".
    else if (letter === "e") {
      output += "3";
    }
    // Every "o" (oh) in the string should be replaced with a "0" (zero).
    else if (letter === "o") {
      output += "0";
    }
    // Every "l" (el) in the string should be replaced with a "1" (one).
    else if (letter === "l") {
      output += "1";
    }
    else {
      output += letter;
    }
  });
  return output;
}
// The program should log to the console the final obfuscated password returned by your obfuscate function.
console.log(obfuscate(passwordInput));