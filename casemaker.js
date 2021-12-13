const camelCase = function(input) {
  let newString = '';  
  for(let i = 0; i < input.length; i++) {
      
    if(input[i] === ' ' && i !== input.length - 1) {
      newString = newString + input[i + 1].toUpperCase();
      i = i + 1;    
    }else {
      newString = newString + input[i]; 
    }    
  } return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));





