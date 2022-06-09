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


/*
Задание 2:
    Написать функцию глубокого сравнения объектов, возвращающую boolean. Сравниваться должны значения всех типов данных
    (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Для определения длины объектов
    разрешается использовать метод Object.keys(). Хорошо протестировать работу функции (можно на объекте из пред. задания).
*/

function deepCompare(obj1, obj2) {
    if (obj1 === obj2) {
      return true;
    }

    if ((typeof obj1 === 'object' && obj1 !== null) && (typeof obj2 === 'object' && obj2 !== null)) {

        
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }

        for (var key in obj1) {
            if (!deepCompare(obj1[key], obj2[key])) {
                return false;
            }
        }
      
        return true;
    }

    if (typeof obj1 === 'function' && typeof obj2 === 'function') {

        if (obj1.toString() === obj2.toString()) {
            return true;
        }        

    }

    return false;
}

deepCompare(initialObj, clonedObj);