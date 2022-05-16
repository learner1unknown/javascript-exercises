const findTheOldest = function(people) {

    /*
    Determine Age of each person
    Check if person is alive or dead,
    if dead calculate age at year of death
    else age = birthday - today (years)

    Compare ages

    Return oldest person 
    */

    people.forEach((person) => {
        if(person.yearOfDeath == null) {
            person['yearOfDeath'] = new Date().getFullYear();
        } 
        
        let age = person.yearOfDeath - person.yearOfBirth;

        person['age'] = age;
    });
    
    people.sort((a, b) => {
    return b.age - a.age;
    });

    return people[0]

};

// Do not edit below this line
module.exports = findTheOldest;
