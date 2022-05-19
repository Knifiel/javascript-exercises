const caesar = function(string, shiftFactor) {
const arr = string.split('');
const shiftArr = [];
newString = "";
    if ((shiftFactor>26) || (shiftFactor < -26)){
        shiftFactor = shiftFactor % 26;
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i].match(/\W/)){
            newString += arr[i];
            continue;
        }
        let char = arr[i];
        char = char.toUpperCase().charCodeAt() + shiftFactor;
        if(char > 90){
            char = 64 + (char - 90);
        } else if (char < 65){
            char = 91 - (65 - char)
        }
        char = String.fromCharCode(char);
        shiftArr.push(char);
        if (arr[i].match(/[a-z]/)){
            newString += char.toLowerCase();
        } else {
            newString += char;
        }
    }
    return newString;
};

// Do not edit below this line
module.exports = caesar;
