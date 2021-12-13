const checkAir = function (samples, threshold) {
  let num = 0; 
  let result = 'clean';
    
    for (let sample of samples){
        if (sample === 'dirty'){
            num += 1; 
        }
    }
    if ((num / samples.length) > threshold){
        result = 'Polluted';
    }
    return result
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))