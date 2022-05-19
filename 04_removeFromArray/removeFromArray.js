const removeFromArray = function(arr) {
    for (let arg of arguments){
        for(let i = 0; i<arr.length; i++ ){
            if(arg === arr[i]){
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
