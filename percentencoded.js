const urlEncode = function(text) {
  let newText = "";
  let add = "%20";
  let result = text.trim()

    for (let letters of result){
        if (letters === " "){
            newText = newText + add;
        }
        else {
            newText = newText + letters;
        }
    }
   
    return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));