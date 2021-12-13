const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

var x = 0 
var y = 0 


const finalPosition = function (moves) {
    let positions = [];

for (const move of moves) {
  if (move === 'east'){
    x = x + 1;
  }
  else if (move === 'west'){
    x = x - 1; 
  }
  else if (move === 'north'){
    y = y + 1;
  }
  else if (move === 'south'){
    y = y - 1;
  }
positions[0] = x
positions[1] = y
}
return positions 
};


console.log(finalPosition(moves));