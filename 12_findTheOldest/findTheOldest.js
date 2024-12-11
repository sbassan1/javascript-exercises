const findTheOldest = function(people) {

    let y = new Date().getFullYear();

    const sortedPeople = people.sort((a, b) => {
      const ageA = (a.yearOfDeath || y) - a.yearOfBirth;
      const ageB = (b.yearOfDeath || y) - b.yearOfBirth;
      return ageB - ageA;
    });

    return sortedPeople[0];
    
};

// Do not edit below this line
module.exports = findTheOldest;
