
// 1.  Условное ветвление 
//   Напишите функцию`checkNumberType(num)`, которая принимает число и возвращает:
// - `"positive"`, если число положительное,
// - `"negative"`, если число отрицательное,
// - `"zero"`, если число равно нулю.  
function checkNumberType(num) {
  if (num % 2 === 0) {
    return "positive"
  } else if (num > 0) {
    return "negative"
  } else if (num === 0) {
    return 'zero'
  } else if (num === !Number) {
    return "Invalid input"
  }
}



// Но учтите, что входные данные могут быть  не только числами.Если передано  не число, выбросите ошибку с сообщением`"Invalid input"`.



/* 2.  Тернарный оператор 
  Напишите функцию`getDiscountedPrice(price, isMember)`, которая принимает цену товара и флаг`isMember`.  
- Если пользователь является членом клуба(`isMember === true`), он получает скидку  15 %.  
- Если нет, то скидка  5 %, но только если цена больше  100 .  
- Верните итоговую цену с учетом скидки, округленную до 2 знаков после запятой. */

function getDiscountedPrice(price, isMember) {
  if (isMember === true) {
    return 'ваша скидка 15%'
  } else if (isMember === false) {
    return 'ваша скидка 5%'
  } else {
    return price.toFixed(2)
  }

}


// 3.  Инструкция switch
// Создайте функцию`calculate(a, b, operation)`, которая выполняет математические операции:
// - `operation` может быть`"add"`, `"subtract"`, `"multiply"`, `"divide"`.  
// - Если передано`"add"`, сложите числа.  
// - Если`"subtract"`, вычтите второе из первого.  
// - Если`"multiply"`, умножьте.  
// - Если`"divide"`, поделите, но обработайте деление на ноль.  
// - Если передана некорректная операция, выбросите`"Invalid operation"`.

function calculate(a, b, operation) {
  switch (operation) {
    case :

      break;

    default:
      "Invalid operation"
  }

}



/*   4.  Логические операторы 
  Напишите функцию`canAccess(age, isAdmin)`, которая принимает возраст пользователя и флаг`isAdmin`.  
- Доступ разрешен, если:
- Пользователь  старше 18   или  он администратор.  
- Если возраст  меньше 12, доступ всегда  запрещен, даже если`isAdmin === true`.  
- Функция возвращает `true` или`false`. */

//   5.  Параметры по умолчанию 
//   Создайте функцию`createUser(name = "Guest", age = 18, role = "user")`, которая возвращает объект пользователя.  
// - Если`name` передан как`null`, установите`"Guest"`.  
// - Если`age` меньше 0, установите его в`18`.  
// - Если`role` пустой(`""`), установите`"user"`.  


// 6.  Метод, изменяющий значение свойства
// Создайте объект lamp с полем isOn (по умолчанию false) и методом toggle(), который меняет его на противоположное.

// 7.  Методы массивов 
// Дан массив объектов:

const books = [
  { title: "Book A", rating: 4.8, price: 150 },
  { title: "Book B", rating: 4.3, price: 90 },
  { title: "Book C", rating: 3.9, price: 50 },
  { title: "Book D", rating: 4.7, price: 200 },
];

// Напишите функцию`filterBooks(books, minRating, maxPrice)`, которая:
// - Возвращает книги с рейтингом  не ниже  `minRating` и ценой  не выше`maxPrice` и возвращает массив только с  названиями книг.  


// 8.  Дана объект:
// const data = { a: 10, b: "hello", c: 42, d: true };
// Используя for...in, создайте новый объект, содержащий только числовые значения.




// 9.  Методы строк 
// Напишите функцию`capitalizeWords(sentence)`, которая принимает строку и  делает заглавной первую букву каждого слова.  

function capitalizeWords(sentence) {
  sentence[0].toUpperCase() + sentence.slice(1)

}
// capitalizeWords("hello world"); // "Hello World"



// 10.  Объект Math 
//   Создайте функцию`randomInteger(min, max)`, которая возвращает случайное целое число  в диапазоне`[min, max]`.  
// - Числа`min` и `max` включены.  
// - Используйте`Math.random`, `Math.floor`, `Math.ceil`.  

