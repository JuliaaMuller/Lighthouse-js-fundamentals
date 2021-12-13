const numberOfVowels = function(data) {

    let counts = 0;
    let vowels = ['a','e','i','o','u'];
    
    
    for (let letters of data){
        for (let i = 0; i < vowels.length ; i++){
            if (letters === vowels[i]){
                counts = counts + 1
            }
        }
    }
   
return counts     
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));