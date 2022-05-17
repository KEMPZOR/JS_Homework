/* Домашнее задание №7 часть 2 (прототипный стиль ООП) */

/*
Задание 2:
    Переписать предыдущий пример с кошками на прототипный стиль ООП.
*/

function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 100) {
        throw new Error('Значение должно быть не меньше 50 гр. или не больше 100 гр.');
    }

    this._foodAmount = amount;
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

var mandarin = new Cat('Mandarin');

mandarin.feed();