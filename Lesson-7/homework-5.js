/* Домашнее задание №5 */

/*
Практическое задание 2:
 Добавить в класс Cat приватное свойство foodAmount, равное 50, и приватный метод formatFoodAmount, который
 будет возвращать это свойство + слово 'гр.'. В методе feed необходимо выводить в консоль информацию вида:
 "Насыпаем в миску (количество гр.) корма."
 "Количество гр." получаем с помощью метода formatFoodAmount.
 Вывести в консоль результат выполнения метода feed.
 */

function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    this.feed = function() {
        return 'Насыпаем в миску ' + formatFoodAmount() + ' корма.';
    }

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }
}

var mandarin = new Cat('Mandarin');

mandarin.feed();

/*
Практическое задание 3:
 Написать единый геттер-сеттер dailyNorm для установки/получения количества корма (foodAmount).
 Оно не должно быть меньше 50 и больше 100 грамм. В случае некорректного количества возвращать сообщение об ошибке.
 Если функция вызывается как геттер - она должна возвращать уже отформатированное значение foodAmount.
 Протестировать метод dailyNorm с разными значениями параметра и без него. Метод feed должен оперировать актуальной
 информацией (использовать внутри себя вызов геттера).
 */

function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    this.feed = function () {
        return 'Насыпаем в миску ' + formatFoodAmount() + ' корма.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 100) {
            throw new Error('Значение должно быть не меньше 50 гр. или не больше 100 гр.');
        }

        foodAmount = amount;
    }

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }
}

var mandarin = new Cat('Mandarin');

mandarin.dailyNorm(); // 50 гр.
mandarin.dailyNorm('89');
mandarin.dailyNorm(); // 89 гр.
mandarin.dailyNorm('49'); // Error
mandarin.dailyNorm('101'); // Error
