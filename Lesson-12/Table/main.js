/* Домашнее задание №11 */

/*
Задание 1:
 Сверстать таблицу из 3х столбцов, в последней строке которой все ячейки объеденены в одну с текстом
 "Добавить".
  По клику на эту ячейку-кнопку в начало таблицы должна добавляться новая строка.
  По клику на ячейку таблицы, в ней должен появиться сфокусированный (!!!) текстовый инпут.
  При потере фокуса инпутом - он должен исчезнуть, на его месте остается лишь ранее введенный в него текст.
  При клике на ячейку, уже содержащую текст - вставляется инпут с этим же текстом (т.е. можно отредактировать текст).
  В одно время в таблице может находиться только один инпут.
  При реализации использовать делегирование событий.

  Добавить событие по нажатию на Enter в случае, если на странице есть активный инпут. Событие должно работать точно
  так же, как и потеря фокуса, то есть прятать инпут и оставлять в ячейке текст. *
*/

var table = document.getElementsByClassName('table')[0],
    input = document.createElement('input');

table.onclick = function(e) {
    var target = e.target;

    while (target != this) {

        if (target.tagName == 'INPUT') {
            return;
        }

        if (target.tagName == 'TD') {

          if (target.classList.contains('last')) { 
              addRow(target);
              return; 
          }

          addInput(target);
          return;
        } 
        target = target.parentNode;
    }
}

input.onblur = function(e) {

    saveText(e.target);
    this.remove();
}

input.onkeydown = function(e) {

    if (e.keyCode === 13) {
        
        saveText(e.target); 
        
        this.blur();
        this.remove();
    }

}

function addInput(node) {

    input.type = 'text';
    input.value = '';
    
    if (node.textContent) {
        input.value = node.lastChild.textContent;
        node.querySelector('p').remove();
    }

    node.appendChild(input).focus();
}

function saveText(node) {

  if (node.parentElement.lastChild.tagName !== "P" && node.value) {
    var paragraph = document.createElement("p");
    paragraph.className = "small-text";

    node.parentElement.appendChild(paragraph);

    paragraph.textContent = node.value;
  }

}

function addRow(node) {

    while (node) {
        if (node.tagName == 'TR') {
            var newRow = document.createElement('tr');
            newRow.innerHTML = '<td></td><td></td><td></td>';

            table.children[0].insertBefore(newRow, node.parentNode.children[0]);

            return;
        }
        node = node.parentNode;
      }

}

