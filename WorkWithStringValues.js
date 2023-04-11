const value = 'Пёвлёв Алексёндр';
let result;

// Самые стандартные функции
value.includes('Александр');

value.startsWith('П');

value.endsWith('р');

// Функции поинтереснее
result = value.replace('а', 'AAA'); // изменит только первый найденный результат

// Метод split разбивает строку на массив, принимая, что из неё убрать
result = value.split('ё');

result = value.split('а').join('ААА'); // поможет обойти ограничение replase

// Метод Join позволяет объединять массив в строку.
let mass = ['Hi', 'how are you']

console.log(mass.join()); // выведется строка Hi,how are you

console.log(mass.join('-')); // выведется строка Hi-how are you. Дефис здесь - это сепаратор.

// Метод trim позволяет убрать пробелы с лева и с права от строки
result = ' Павлов ';

console.log(result.trim()); // Пробелы уберутся

// Метод substr возвращяет строку в зависимости от указанных параметров.
// Первым аргументом номер индекса с которого мы хотим получить строку.
// Вторым аргументом указываем кол-во символов которое хотим получить после первого аргумента.
result = '123456';

console.log(result.substr(2)); // выведет 3456

console.log(result.substr(1,2)); // выведет 23;

//Метод IndexOf возвращяет индекс, откуда начинается подстрока

let _name = 'Павлов Александр Вячеславович';
let surname = 'Вячеславович';

let index = _name.indexOf(surname);

console.log(`Строка начинается с ${index}`) // c 17 индекса.

// Аппер и Ловер кейсы

result = value.toUpperCase();
result = value.toLowerCase();

result = value.toUpperCase().startsWith('П');
result = value.toLowerCase().endsWith('р');
result = value.toUpperCase().includes('ПАВ');

console.log(result);