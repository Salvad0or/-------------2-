const array = [];
array.push('В конец');
array.unshift('В начало');

const summ = [1,2,3,4,5];
summ.shift(); // Удаляет из массива первый элемент и при необходимости его можно вернуть в переменную.
summ.pop(); // Удаляет из массива последний элемент и при необходимости его можно вернуть в переменную.
summ.splice(1,2); // Удалит с первого индекса. Удалит два элемента.

const _tryToAddWithSplise = [1, 2, 3, 4, 5];
_tryToAddWithSplise.splice(1,0,'a','б'); // [1, 'a','б', 2, 3, 4, 5]

const mass = [1, 2, 3, 4, 5]
const newMass = mass.reverse(); // Операнд с права не будет изменен. Мы получим новый массив с *реверснутыми* элементами

// <----> Cортировка <---->
const mass2 = [5, 4, 1, 12, 15];
mass2.sort(); // Затронет именно исходный массив. 

/* 
С сортировкой не всё так просто. JS сортирует именно по строковым параметрам, что бы сортировать по числовым нужно передать функцию, 
в которой необходимо указать, как именно производить сортировку :
*/

mass2.sort((x,y) => x - y); // Вот так с числами всё будет ОК.

// <----> Копирование массива. Метод slice <---->

const mass3 = [1,2,3,4,5];

let newMass3 = mass3.slice(); //     Просто получим копию массива
    newMass3 = mass3.slice(3); //    Получим массив, с индекса 3 и до конца
    newMass3 = mass3.slice(-5); //   Копия последних 5 элементов
    newMass3 = mass3.slice(3,5); //  Копия от индекса 3 до индекса 5. При чем 5 не включительно.
    newMass3 = mass3.slice(1,-1); // От второго до пред последнего.


// Так же массивы имеют стандартный набор методов:
let mass4 = [1,2,3];

mass4.includes();
mass4.indexOf();
mass4.lastIndexOf();

// <----> Интересные действия в массивах <---->
let seriousMass = [
    {name: 'Alex', age : 18},
    {name: 'Boba', age : 17},
    {name: 'Fet', age : 17},
    {name: 'Teta', age : 16},

]

let Alex = seriousMass.find(a => a.name === 'Alex' && a.age === 18); // получим объект Alex
let AlexIndex = seriousMass.findIndex(a => a.name === 'Alex' && a.age === 18); // получим индекс, где лежит Alex в массиве

seriousMass.every(e => e.age > 30); // Если все объекта массива удовлетворяют заданному условию, вернется true
seriousMass.some(e => e.age < 30); // Если хоть один объект удовлетворит условию, вернется true

let newMass5 = seriousMass.filter(i => i.age === 17); // Отфильтруем по указанному условию.

let theOnlyNames = seriousMass.map(i => i.name); // Получим только именна в массив

// <----> Метод Reduce на примере корзины <---->
const cart = [
    {item: 'Лампочка', price: 1, quantity: 1},
    {item: 'Колодки', price: 2, quantity: 1},
    {item: 'Дворник', price: 3, quantity: 1},

]

let finalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity ,
    0 // Ноль здесь это значение для total
);

console.log(finalCost); // 6

// <----> Foreach старый добрый <---->
const students = [
    {name: 'Костя', age: 19},
    {name: 'Игорь', age: 29},
    {name: 'Вова', age: 39},

]

students.forEach( (student,index) =>{
    console.log(`${student.name} имеет возраст ${student.age} и находится в массиве под индексом ${index}`)
}
)

/*
Костя имеет возраст 19 и находится в массиве под индексом 0
Игорь имеет возраст 29 и находится в массиве под индексом 1
Вова имеет возраст 39 и находится в массиве под индексом 2 
*/
