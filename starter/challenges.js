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
console.log(scoreDolphins, scoreKolas)
checkWinner(scoreDolphins, scoreKolas)