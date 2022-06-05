/*
Задание 1:
    Написать функцию, возвращающую глубокую копию объекта - его клон. Клонироваться должны значения всех типов данных
    (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Метод isArray использовать можно.
*/

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

function deepCopy(obj) {

    if (obj === null || typeof(obj) !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        var array = [];
        
        for (var i = 0; i < obj.length; i++) {
            array[i] = deepCopy(obj[i]);
        }

        return array;
    }

    if (typeof(obj) === 'object') {
        var object = {};

        for (var key in obj) {
            object[key] = deepCopy(obj[key]);
        }

        return object;
    }
}

var clonedObj = deepCopy(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);