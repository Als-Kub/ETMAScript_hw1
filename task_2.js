"use strict";
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
  let result = 0; // Начальное значение счетчика
  return {
    increment: () => ++result,
    decrement: () => --result,
  };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
