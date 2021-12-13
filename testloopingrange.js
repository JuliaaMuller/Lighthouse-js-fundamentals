

function range (start, end, step){
  const result = [];
  for (let i = start ; i <= end ; i = i + step){
    
    if ((start === undefined) || (end === undefined) || (step === undefined)){
    break;
    }
    else if(start > end){
    break;  
    }
    else if(step <= 0){
    break;  
    }
    else result.push(i);
    
  }
return result;
}
console.log(range(0, 10, -2));
