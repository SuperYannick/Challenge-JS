'use strict';

const dolphinScore = [44, 23, 71];
const koalaScore = [65, 54, 49];

/*const score1Dolphin = 44;
const score2Dolphin = 23;
const score3Dolphin = 71;
const score1Koala = 65;
const score2Koala = 54;
const score3Koala = 49;*/

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphinAverage = calcAverage(
    dolphinScore[0],
    dolphinScore[1],
    dolphinScore[2]
);

console.log(dolphinAverage);

let koalaAverage = calcAverage(
    koalaScore[1], 
    koalaScore[2], 
    koalaScore[0]
    );
console.log(koalaAverage);

function checkWinner() {
    if (dolphinAverage > koalaAverage) {
      return `L'équipe dauphin gagne (${dolphinAverage} vs ${koalaAverage})`;
    } else {
      return `L'équipe koala gagne (${koalaAverage} vs ${dolphinAverage})`;
    }
  }
  
  console.log(checkWinner());