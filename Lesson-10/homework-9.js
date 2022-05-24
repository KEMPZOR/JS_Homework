/* Домашнее задание №9 */

/*
Задание 1:
 Переписать задачу с использованием перебирающего метода массивов:
 function filterNumbersArr(numbers) {
     var newArr = [];

     for (var i = 0; i < numbers.length; i++) {
         var el = numbers[i];

         if (el > 0) {
             newArr[newArr.length] = el;
         }
     }

     return newArr;
 }
 filterNumbersArr([-1, 0, 2, 34, -2]);
*/

function filterNumbersArr(numbers) {

    var newArr = numbers.filter(function(value) {
        return value > 0;
    });

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2]);


/*
Задание 2:
 Написать функцию, принимающую массив чисел и возвращающую первое найденное положительное число.
*/

// Вариант 1
function checkNumberArr(arr) {

    var number = arr.find(function(item) {
        return item > 0;
    });

    return number;
}
 
checkNumberArr([-1, 0, 2, 34, -2]);

// Вариант 2
function checkNumberArr(arr) {

    var number = arr.filter(function(item) {
        return item > 0;
    })[0];

    return number;
}
 
checkNumberArr([-1, 0, 2, 34, -2]);


/*
Задание 3:
 Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
 Регистр в словах учитываться не должен. Тестировать функцию можно только на одиночных словах (без фраз).

 Функция должна работать следущим образом:
     isPalindrome('шалаШ'); // true
     isPalindrome('привет'); // false
*/

//Вариант 1
function isPalindrome(str) {
    return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
}

isPalindrome('шАлаШ');

//Вариант 2
function isPalindrome(str) {
    var strLowerCase = str.toLowerCase().split(' ').join('');

    return strLowerCase == strLowerCase.split('').reverse().join('');
}

isPalindrome('А роза упала на лапу Азора');


/*
Задание 4:
 Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами (напр. кот и отк).
 Регистр в словах учитываться не должен.

 Функция должна работать следущим образом:
     areAnagrams('кот', 'Отк'); // true
     areAnagrams('кот', 'атк'); // false
     areAnagrams('кот', 'отко'); // false
*/

function areAnagrams(str, strAnagram) {
    return str.toLowerCase().split('').sort().join('') == strAnagram.toLowerCase().split('').sort().join('');
}

areAnagrams('кот','Отк');


/*
Задание 5:
 Написать функцию, которая будет разбивать массив на под-массивы определенной длины.

 Функция должна работать следующим образом:
     divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
     divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
*/

// Вариант 1
function divideArr(arr, interval) {
    var result = [];

    for (var i = 0; i < arr.length; i += interval) {
        result.push(arr.slice(i, i + interval));
    }

    return result;
}

divideArr([1, 2, 3, 4], 1);

// Вариант 2
function divideArr(arr, interval) {
    var result = [];

    while (arr.length > 0) {
        result.push(arr.splice(0, interval));
    }

    return result;
}

divideArr([1, 2, 3, 4], 1);


/*
Задание 6 *:
 Написать функцию, определяющую, является ли переданное в нее число степенью двойки.
*/

// Вариант 1
function degreeTwo(number) {
    var sum = 1;

    while (number) {

        if (sum >= number) {
            break;
        }

        sum *= 2;
    }

    return sum == number;
}

degreeTwo(1125899906842624);


// Вариант 2
function degreeTwo(number) {
    return Math.pow(2, Math.floor(Math.log2(number))) === number;
}

degreeTwo(1125899906842624);