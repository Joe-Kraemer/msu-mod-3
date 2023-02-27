// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {

    // Generate random number 
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

// Write password to the #password input
function writePassword() {
  if (validateInput() === true) {
    var numChars = parseInt(document.getElementById("numChars").value);
    var password = generatePassword(numChars);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(numChars) {
  var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var specialChars = ['\!', '\@', '\*', '\%', '\&']
  var checkboxes =
    document.getElementsByName('option');

  var first = Math.floor(numChars / 2)
  var third = Math.floor(numChars / 2)

  var lowercaseCopy = lowercaseChars
  var lowercaseShuffled = shuffleArray(lowercaseCopy)
  var uppercaseCopy = uppercaseChars
  var upperCaseShuffled = shuffleArray(uppercaseCopy)
  var numsCopy = nums
  var numsShuffled = shuffleArray(numsCopy)
  var specialsCopy = specialChars
  var specialShuffled = shuffleArray(specialsCopy)
  var useChars = []
  var output = ''






  var lowercase = checkboxes[0]
  var uppercase = checkboxes[1]
  var numbers = checkboxes[2]
  var special = checkboxes[3]
  if (lowercase) {
    useChars.push(...lowercaseChars)
    //   for (let i = 0; i < first; i++) {

    //     output =+ lowercaseShuffled.pop()

    //   }
  }
  if (uppercase) {
    useChars.push(...uppercaseChars)





    // for (let i = 0; i < first; i++) {
    //   // uppercase in new, pop(numChars)
    //   output += upperCaseShuffled.pop()
    // }




  }
  if (numbers) {
    useChars.push(...nums)

    // for (let i = 0; i < third; i++) {
    //   // numbers
    //   output += numsShuffled.pop()
    //     }      
  }
  if (special) {

    useChars.push(...specialChars)
    // for (let i = 0; i < third; i++) {
    //   output += specialShuffled.pop()
    // }
  }
  // var shuffledOutput = shuffleArray(output)

  console.log(numChars)
  console.log(useChars)

  var string = ""
  for (var i = 0; i < numChars; i++) {

    var random = Math.floor(Math.random() * useChars.length)
    //  console.log (random)

    var randomChar = useChars[random]
    string += randomChar

  }
  return string
}

// lowercase uppercase numbers special

function validateInput() {
  var numChars = parseInt(document.getElementById("numChars").value);


  if (!numChars) {
    alert("The box cannot be empty");
    numChars.focus();
    return false
  }

  if (numChars < 8) {
    alert("Please choose a number greater than 7");
    numChars.focus();
    return false
  }
  if (numChars > 28) {
    alert("Please choose a number lower than 29");
    numChars.focus();
    return false
  }



  return true;
}