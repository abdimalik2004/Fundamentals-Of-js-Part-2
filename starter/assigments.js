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