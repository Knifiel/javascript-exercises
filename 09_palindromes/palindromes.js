const palindromes = function (string) {
let word = string.replace(/\W/g, '');
word = word.toLowerCase();
let forward = word.split("");
let backward = [...forward];
backward.reverse();
for(i = 0; i<forward.length; i++){
    if (forward[i] != backward[i]){
        return false;
    }
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
