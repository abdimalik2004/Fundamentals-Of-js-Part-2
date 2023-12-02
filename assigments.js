/*
// LECTURE 33 functions
function describeCountry(country, population, capitalCity) {
    const somaliia = `${country} has ${population} million  people and its
    capital city is ${capitalCity}`;
    return somaliia;
}
const somalia = describeCountry('somalia', 20, 'mogadisho')
const ethipia = describeCountry('ethiopia', 145, 'Addis abba')
const kenya = describeCountry('kenya', 30, 'nairobi')
console.log(somalia);
console.log(ethipia);
console.log(kenya);

// LECTURE 34 : function declaration and expression
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}
const persom = percentageOfWorld1(20);
const pereth = percentageOfWorld1(145);
const perkenya = percentageOfWorld1(30);
console.log(persom, pereth, perkenya);

const perSom = percentageOfWorld2(20);
const perEth = percentageOfWorld2(145);
const perKenya = percentageOfWorld2(30);
console.log(perSom, perEth, perKenya);

// LECTURE: Introduction to Arrays
const populations = [2000000, 3000000, 4000000, 5000000];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
];
console.log(percentages);

// LECTURE: Introduction to Objects
const myCountry = {
    country: 'Somalia',
    capital: 'Mogadisho',
    language: 'Somali',
    population: '20 million',
    neighbours: ['Ethiopia', 'Kenya', 'Djbouti'],
    describe: function () {
        return console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capitall called ${this.capital}`)
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true :
        false;
        // Even simpler version (see why this works...)
        // this.isIsland = !Boolean(this.neighbours.length);
        }
};
// LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}`)
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.describe());
console.log(myCountry.checkIsland())
*/
// LECTURE: Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++)
 console.log(`Voter number ${voter} is currently voting`);