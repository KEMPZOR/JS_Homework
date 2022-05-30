var container = document.getElementById('container'),
    button = document.getElementsByTagName('button')[0],
    parOne = document.createElement('p'),
    parTwo = document.createElement('p');


parOne.innerHTML = 'Hello, here are <a href="https://www.google.by/">Link 1</a> and <a href="https://www.google.com/">Link 1</a>';
parTwo.innerHTML = 'Hello, here are <a href="https://www.google.by/">Link 3</a> and <a href="https://www.google.com/">Link 4</a> and <a href="https://www.google.ua/">Link 5</a>';

container.appendChild(parOne);
container.appendChild(parTwo);

localStorage.clear();

button.addEventListener('click', function() {

    for (var i = 0; i < parOne.children.length; i++) {
        parOne.children[i].className = 'link';
    }

});

parTwo.onclick = function(e) {
    var target = e.target;

    if (target.nodeName === 'A') {
        e.preventDefault();

        if (!localStorage.getItem(target.textContent)) {

            localStorage.setItem(target.textContent, JSON.stringify({
                path: target.href
            }));

            target.href = '#';
            alert('Ссылка сохранена');
        } else {
            alert(JSON.parse(localStorage.getItem(target.textContent)).path);
        }

    }
}