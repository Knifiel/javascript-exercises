const findTheOldest = function(array) {
    return oldest = array.reduce((currentOldest, currentAge ) =>{
    let ageCurrent = 0;
    let ageOldest = 0;
    if (currentAge.hasOwnProperty("yearOfDeath")){
        ageCurrent = currentAge.yearOfDeath - currentAge.yearOfBirth;
    } else {
        let date = new Date().getFullYear();
        ageCurrent = date - currentAge.yearOfBirth;
    }
    if (currentOldest.hasOwnProperty("yearOfDeath")){
        ageOldest = currentOldest.yearOfDeath - currentOldest.yearOfBirth;
    } else {
        let date = new Date().getFullYear();
        ageOldest = date - currentOldest.yearOfBirth;
    }
    if(ageCurrent > ageOldest){
        return currentAge;
    } else {
        return currentOldest;
    }
    });
};


// Do not edit below this line
module.exports = findTheOldest;
