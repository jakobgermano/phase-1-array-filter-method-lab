// Code your solution here

const { arrayContaining } = require("expect")

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
   return drivers.filter(function(driver){
        return driver.toUpperCase() === name.toUpperCase()
    })
}

function fuzzyMatch(drivers, members)  {
    return drivers.filter(el => el.toLowerCase().indexOf(members.toLowerCase()) == 0)
}

function matchName(drivers, names) {
    return drivers.filter(function(driver) {
    return driver.name == names });
}



