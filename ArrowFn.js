// Синтаксис стрелочной функции
const arrowFn = (name) => {
    console.log(name);
}

arrowFn('Alex');

// Если функция имеет единственный аргумент, скобки можно опустить
const singleArg = name => {

    console.log(name);
};

singleArg('I dont have any arguments');

//Для функций без аргументов указываются пустые скобки
const withoutArg = () => {

    console.log('I have nothing');

}

withoutArg();

//Если у стрелочной функции опустить фигурные скобки, то функция вернет результат выражения
let x = 1;
let y = 2;

const math = (a,b) => a + b;

console.log(math(x,y));

// Если хотим вернуть объект, то нужно обернуть в скобки
const returnObject = (name,surname) => ({name, surname});

// Стрелочная функция не имеет собственного this
const Alex = {
    name: 'Alex',
    surname : 'Pavlov',

    returnName(){
        return `${this.name} + ${this.surname}`
    },

    reurnNameWithArrow: () => `${this.name} ${this.surname}`
}

console.log(Alex.returnName());
console.log(Alex.reurnNameWithArrow());

//IIFE
(() => {

console.log('I am the IIFE')

})();