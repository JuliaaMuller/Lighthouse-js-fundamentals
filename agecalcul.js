function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return (name + ' is ' + age + ' years old.');
}
ageCalculator("Miranda", 1983, 2015);
ageCalculator("Ferdinand", 1988, 2015);