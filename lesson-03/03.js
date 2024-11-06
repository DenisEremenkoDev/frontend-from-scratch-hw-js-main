// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(numberOne, numberTwo, nemberThree) {
    if (numberOne > numberTwo && numberOne > nemberThree) {
        return numberOne
    } else if (numberTwo > numberOne && numberTwo > nemberThree) {
        return numberTwo
    } else {
        return nemberThree
    }
}

const number = findLargest(3, 1 ,2)
// console.log(number);
