/* 
// CHALLENGE #1 
const calcaverage = (a, b, c) => (a + b + c) / 3;
console.log(calcaverage(3, 4, 5));
// Test 1
let scoreDolphins = calcaverage(44, 23, 71);
let scoreKolas = calcaverage(65, 54, 49);
console.log(scoreDolphins,scoreKolas);

const checkWinner = function(avgDolphins, avgKolas) {
    if(avgDolphins >= 2 * avgKolas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKolas})`);
    } else if (avgKolas >= 2 * avgDolphins) {
        console.log(`Kolas win (${avgKolas} vs ${avgDolphins})`);  
    } else {
        console.log('No one wins...');
    }
}
checkWinner(scoreDolphins, scoreKolas);

// Test 2
scoreDolphins = calcaverage(85, 54, 41);
scoreKolas = calcaverage(23, 34, 27);
console.log(scoreDolphins, scoreKolas);
checkWinner(scoreDolphins, scoreKolas);
// CHALLENEGE #2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 
console.log(bills, tips);
// CHALLENGE #3
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
   
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
   
  mark.calcBMI();
  john.calcBMI();
   
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
  }
*/
  // CHALLENGE #4
  function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 
  /* Write your code below. Good luck! 🙂 */
  const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
  const tips = [];
  const totals = [];
  for(let i = 0; i < bills.length; i++) {
      const tip = calcTip(bills[i]);
      tips.push(tip);
      totals.push(tip + bills[i]);
      
  }
  console.log(bills, tips, totals);
  const calcAverage = function(arr) {
      let sum = 0;
      for(let i = 0; i < arr.length; i++) {
          sum += arr[i];
      }
      return sum / arr.length;
  };
  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  console.log(calcAverage(tips));