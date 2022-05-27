var container = document.getElementsByClassName('container')[0],
    button = document.getElementsByClassName('button')[0],
    parOne = document.createElement('p'),
    parTwo = document.createElement('p');


parOne.innerHTML = 'Первый текст и <a href="/gallery">ссылка</a> внутри <a href="/portfolio">ссылка 2</a>';
parTwo.innerHTML = 'Второй текст и <a href="/gallery">ссылка</a> внутри <a href="/portfolio">ссылка 2</a>';

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
                path: target.href}
            ));

            target.href = '#';
            alert('Ссылка сохранена');
        } else {
            alert(JSON.parse(localStorage.getItem(target.textContent)).path);
        }

    }
}