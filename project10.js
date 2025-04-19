function filterNegative(arr){
    return arr.filter(num => num < 0)
}
const number = [2, -6, 7, 1, -5];
const positiveNumbers = filterNegative(number)
console.log (positiveNumbers);
