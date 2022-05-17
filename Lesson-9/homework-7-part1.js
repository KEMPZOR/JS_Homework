/* Домашнее задание №7 часть 1 (функциональный стиль ООП) */

/*
Задание 1:
    Создать класс Animal. Перенести в него все свойства и методы. Отнаследоваться внутри Cat от Animal.
    Расширить метод feed для кошек. Теперь он должен выводить в консоль информацию вида:
      "Насыпаем в миску (количество гр.) корма.
      Кот доволен ^_^"
    Использовать вызов родительского метода вида animalFeed() и сохранение контекста this через переменную.
    Все вызовы, которые работали ранее, должны по-прежнему работать корректно.

    Добавить публичный метод stroke, который будет выводить в консоль информацию "Гладим кота.".
    Доделать метод feed таким образом, чтобы можно было цепочкой вызывать его и метод stroke в любой
    последовательности и сколько угодно раз.
    (Лишние логи можно убрать, делать всё в том же задании).
*/

function Animal(name) {
    var foodAmount = 50;
    var self = this;

    self.name = name;

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };

    self.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 100) {
            throw new Error('Значение должно быть не меньше 50 гр. или не больше 100 гр.');
        }

        foodAmount = amount;
    };

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function() {
        animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    };

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };
}

var mandarin = new Cat('Mandarin');

mandarin.feed();