const judgeVegetable = function (vegetables, metric) {
    
let value = [];
    for (let i = 0 ; i < vegetables.length ; i++){
        value.push (vegetables[i][metric]);
    }
   
    for (let j = 0 ; j < vegetables.length ; j ++){
        if (vegetables[j][metric] === Math.max(...value)){
            return vegetables[j].submitter;
        }
}
    }

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric)); 