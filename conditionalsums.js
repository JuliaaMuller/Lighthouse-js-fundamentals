const conditionalSum = function(values, condition) {
  let sum = 0;
    for (let num of values) {
        if(num %2 === 0 && condition === "even"){
            sum = sum + num;
        }
         else if (num %2 !== 0 && condition === "odd"){
             sum = sum + num
         }
    }
    return sum  
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));