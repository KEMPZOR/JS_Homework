var input = document.querySelectorAll('input[type="text"]'),
    button = document.querySelector('input[type="submit"]'),
    table = document.createElement('table');

input.forEach(function(item) {
    item.addEventListener('keyup', checkInputValue);
});
button.addEventListener('click', buttonValidate);
table.addEventListener('click', reverseChees);

function checkInputValue(e) {
    var target = e.target;

    for (var i = 0; i < input.length; i++) {
        if (!input[i].value) {
            button.disabled = true;
            break;
        }
        button.disabled = false;
    }       
}

function buttonValidate(e) {
    e.preventDefault();

    var arr = [];

    for (var i = 0; i < input.length; i++) {

        if (!+input[i].value || +input[i].value > 10) {
            alert('Введите корректное значение в поле ' + input[i].previousElementSibling.textContent + ' целое число от 1 до 10');
            input[i].value = '';
            button.disabled = true;
        } else {
            arr.push(+input[i].value);
        }

    }
    addTableChees(arr);
}

function addTableChees([columnY, rowsX]) {
    var body = document.getElementsByTagName('body')[0],
        tableInner = '';

        if (arguments[0].length == 2) {
           
            for (var i = 0; i < rowsX; i++) {
                tableInner += '<tr>';
        
                for (var j = 0; j < columnY; j++) {
                    tableInner += (i % 2 === j % 2) ? '<td class="white"></td>' : '<td class="black"></td>';
                }
        
                tableInner += '</tr>';
            }
        
            table.className = 'table';
            table.innerHTML = tableInner;
        
            body.insertAdjacentElement('beforeend', table);

        } else if (table) {
            table.remove();
        }    


}

function reverseChees(e) {
    var target = e.target,
        td = document.querySelectorAll('td');

    while (target != this) {

        if (target.tagName == 'TD') {

           for (var i = 0; i < td.length; i++) {
               td[i].className = (td[i].className === 'black') ? 'white' : 'black';
           }

          return;
        } 

        target = target.parentNode;
    }
}