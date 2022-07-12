const bill = 275;
const lowTip = 0.15;
const highTip = 0.20;

/*if (bill < 50 || bill > 300){
    tip = bill * highTip ;
    console.log(highTip);
} else {
    tip = bill * lowTip ;
    console.log(lowTip);
}
console.log(tip);*/

console.log(bill < 50 || bill > 300 ? tip = bill * highTip : tip = bill * lowTip);
const totalBill = bill + tip;
console.log(`La note était de ${bill}, le pourboire de ${tip} et la valeur totale était de ${totalBill}`);