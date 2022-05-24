/* Домашнее задание №10 */

/*
Задание 1:
 Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.
*/

function namesToObject(names) {

    var newArr = names.map(function(item) {
        return {name: item};
    });

    return newArr;
}

namesToObject(['Vasya', 'Petya', 'Oleg']);


/*
Задание 2:
 Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
     Для решения использовать перебирающий метод массивов (не метод join).
*/

function currentTime(arr) {
    
    var result = arr.reduce(function(str, current) {
        return str + ' : ' + current;
    }, 'Текущее время');

    return result;   
}

currentTime(['00', '13', '24']);


/*
Задание 3:
 Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
    должно быть "топорным".
*/

function vowelsLength(str) {
    var vowels = ['а', 'о', 'у', 'ы', 'э', 'я', 'ё', 'ю', 'и', 'е'];
    str = str.toLowerCase().split('');

    var result = str.filter(function(item) {
        return vowels.find(function(vowel) {
            return item == vowel;
        });
    });

    return result.length;
}

vowelsLength('Гласные, не согласные, но прекрасные');


/*
Задание 4:
 Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
 восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
 вопросительным знакам - убрав их).
 Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем (без учета пробелов,
 запятых и т.д. - именно букв). Из ранее непройденных методов разрешается использовать только (!!!) регулярное выражение
 в методе split.
     Функция должна работать следущим образом (потестировать на данном тексте):
     countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
     // Привет, студент: Letters quantity is: 13
     // Студент: Letters quantity is: 7
     // Как дела, студент: Letters quantity is: 14
*/

function countSentencesLetters(str) {
    var result,
        text = '';

    result = str.split('').reduce(function(prev, current, i, arr){
        return (arr[i - 1] != current) ?  prev + current : prev;
    }).split(/[.!?]+/);

    result.forEach(function(item) {

        if (item.length) {
            text += item.trim() + ': Letters quantity is: ' + item.split(/[, ]+/).join('').length + '\n';
        }

    });

    return alert(text);
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');

/*
Задание 5 *:
 Написать функцию, которая будет находить в переданном ей тексте первое наиболее часто повторяемое слово и возвращать
 информацию вида:
     "Максимальное число повторений у слова "привет" - 8"
 Для удобного разделения текста на слова сразу по нескольким знакам препинания - разрешается использовать регулярное
 выражение в методе split.
*/

function countDuplicateWord(str) {
    var arrWords = str.toLowerCase().split(/[\s.,!?]/g),
        obj;

    obj = arrWords.filter(function(item) {
        return item.length > 0;
    }).reduce(function(item, value) {
        item[value] = (item[value] || 0) + 1;
        return item;
    },{});

    var result = Object.keys(obj).sort(function(a, b) {
        return obj[b] - obj[a];
    });

    return 'Максимальное число повторений у слова "' + result[0] + '" - ' + obj[result[0]];
}

countDuplicateWord('Привет, символов, символов количество количество количество количество пример пример пример.');