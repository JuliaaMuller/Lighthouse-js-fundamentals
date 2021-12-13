const sumLargestNumbers = function(data) {
  let newData1 = 0
  let newData2 = 0
  let result 
  
  for (let i = 0; i < data.length ; i++){
      if (data[i] > newData1){
          newData1 = data[i];
          
      }
  }

   data.splice(data.indexOf(newData1))
        
  
  for (let j = 0; j < data.length ; j++){
        if (data[j] > newData2){
            newData2 = data[j];
            
        }
    }
    
    result = newData1 + newData2
    
    return result
  
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));