const repeatNumbers = function(data) {
  let result = []
  for (let k =0 ; k< data.length ; k++){
      result.push("")
  }
  for (let i = 0 ; i < data.length ; i++){
      for (let j = 0 ; j< data[i][1] ; j++) {
          result[i] = result[i] + data[i][0];
         
      }
      
}return result.toString()  
    };

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
