const instructorWithLongestName = function(instructors) {

  let longestName = { name: "" }; 

  for (let i = 0; i < instructors.length; i++) {
    if (longestName.name.length < instructors[i].name.length) {
      longestName = instructors[i];
    }
  }

  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));