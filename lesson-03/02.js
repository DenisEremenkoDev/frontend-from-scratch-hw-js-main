// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    if (number%2 === 0) {
        return true
    } else {
        return false
    }
}
const resultNumber = isEven(-1)
console.log(resultNumber);

// function isEven(number) {
//     return number % 2 === 0 ? true : false
// }

// console.log(isEven(-1));
// console.log(isEven(4));