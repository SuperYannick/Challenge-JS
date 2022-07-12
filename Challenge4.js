//1

const averageScoreDauphines = (96 + 108 + 89) / 3;
console.log(averageScoreDauphines);

const averageScoreKoalas = (88 + 91 + 110) / 3;
console.log(averageScoreKoalas);

//2

/*const finalScore = averageScoreDauphines > averageScoreKoalas && averageScoreDauphines === averageScoreKoalas;*/

//console.log (finalScore);
//console.log(finalScore === true ? `Les Dauphines gagnent la competition avec un score de ${averageScoreDauphines.toFixed(2)}` : `Les Koalas gagnent la competition avec un score de ${averageScoreKoalas.toFixed(2)}`);

//if (finalScore === true && averageScoreDauphines => 100) {

if (averageScoreDauphines > averageScoreKoalas) {
  if (averageScoreDauphines > 100) {
    console.log(`Les Dauphines gagnent la competition avec un score de ${averageScoreDauphines.toFixed(2)}`);
  } else {
    console.log("pas de gagnant mais Dauphines en tête");
  }
} else if (averageScoreDauphines < averageScoreKoalas){
  if (averageScoreKoalas > 100) {
    console.log(`Les Koalas gagnent la competition avec un score de ${averageScoreKoalas.toFixed(2)}`);
  } else {
    console.log("pas de gagnant mais Koalas en tête");
  }
} else {
    console.log('Egalité');
}
