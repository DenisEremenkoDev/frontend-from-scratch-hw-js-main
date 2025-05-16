/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  let dotCount = 0;      // количество точек
  let digitCount = 0;    //количество цифр
  let startIndex = 0;

  str = str.trim()
  if (str === "") return false


  //Анализ первого символа:
  if (str[0] === '+' || str[0] === '-') {
    startIndex = 1;
    // Если строка состоит только из знака
    if (startIndex === str.length) return false;
  }
  for (startIndex; startIndex < str.length; startIndex++) {
    if (str[startIndex] === ".") {
      dotCount++
      if (dotCount > 1) return false
    }
    else if (str[startIndex] >= '0' && str[startIndex] <= '9') {
      digitCount++
    } else {
      return false; // любой символ, не точка и не цифра
    }
  };
  if (digitCount === 0 || str[str.length - 1] === ".") {
    return false
  }
  return true
}

console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false
