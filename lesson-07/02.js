/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */
function isNumeric(str) {
    if (typeof str !== 'string' || str.trim() === '') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}
