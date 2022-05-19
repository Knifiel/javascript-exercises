const reverseString = function(str) {
let string = str.split('');
string.reverse();
let reversedString = "";
for (let i=0; i<string.length; i++){
reversedString += string[i];
}
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
