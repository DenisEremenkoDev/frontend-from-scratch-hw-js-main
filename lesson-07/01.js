/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/


function capitalizeWords(str) {
  if (str === "") return str
  let result = ""
  let needCapitalize = true
  for (let i = 0; i < str.length; i++) {
    if (needCapitalize) {
      result += str[i].toUpperCase()
      needCapitalize = false
    } else if (str[i] === " ") {
      needCapitalize = true
      result += str[i]
    } else {
      result += str[i].toLowerCase()
    }
  }
  return result
}



// console.log(capitalizeWords("hello world from javascript"));





