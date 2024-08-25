/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
// const isAdmin = false
// const isVerifiedUser = true
// const hasSpecialPermission = true
// const hasTemporaryPass = false

// let isAccess

// your code

const isAdmin = false  
const isVerifiedUser = true 
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)
console.log(isAccess);






// const user = (isAdmin, isVerifiedUser, hasSpecialPermission, hasTemporaryPass)

// let isAccess

// if (user === isAdmin || user === isVerifiedUser) {
//     if (user === hasSpecialPermission || user === hasTemporaryPass) {
//         // alert("Access allowed")
//         isAccess = user
//         console.log("Access allowed");
        
//     }
// } else  {
//     // alert("No access")
//     console.log("No access");
    
// }