/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true; // найден true
        }
    }
    return false; // не найден false
}


function findCommonElements(array1, array2) {
        let commonElements = [];  // Массив для хранения общих элементов
        for (let i = 0; i < array1.length; i++) {
            // Проверяем, содержится ли элемент array1[i] в array2
            if (includesElement(array2, array1[i]) && !includesElement(commonElements, array1[i])) {
                commonElements.push(array1[i]);
            }
        }
        return commonElements;
    
    
}
// array1: [1, 2, 3, 4]
// array2: [2, 3, 5, 6]

// // expected: [2, 3]
console.log(findCommonElements([1, 2, 3], [4, 5, 6]));




// const intersection = (array1, array2) => {
//     let result = [];
//     for (let i = 0; i < array1.length; i++) {
//       if (array2.includes(array1[i])) {
//         result.push(array1[i]);
//       }
//     }
//     return result;
//   }