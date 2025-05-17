/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */
function isNumeric(str) {
    if (typeof str !== 'string' || str.trim() === '') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}
console.log(isNumeric("123"));    // true
console.log(isNumeric("1."));     // true (теперь работает)
console.log(isNumeric(".5"));     // true
console.log(isNumeric("-12.3"));  // true
console.log(isNumeric("1.23e5")); // true
console.log(isNumeric(""));       // false
console.log(isNumeric(" "));      // false
console.log(isNumeric("12a"));    // false