var button = document.getElementsByClassName('button__link')[0],
    tabsList = document.getElementsByClassName('tabs__list')[0],
    tabsItem = document.getElementsByClassName('tabs__list-item'),
    tabsUser = document.getElementsByClassName('tabs__users')[0];

button.addEventListener('click', getUserAjaxButton);

tabsList.addEventListener('click', function(e) {

    if (e.target.className === 'tabs__list-item') {

        Object.keys(tabsItem).forEach(function(key) {
            if (tabsItem[key].classList.contains('active')) {
                tabsItem[key].classList.remove('active');
            }
        });

        e.target.classList.add('active');

        if (localStorage.getItem(e.target.dataset.id)) {
            tabsUser.innerHTML = localStorage.getItem(e.target.dataset.id);
        } else {
            toggleUsersAjax(e);
        }

    }   
});


function toggleUsersAjax(e) {
    var target = e.target;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();

    xhr.onload = function() {
        var statusType = +String(this.status)[0];
        if (statusType === 2) {
            try {
                if (!JSON.parse(this.response).data.length || !JSON.parse(this.response).data[0].first_name) {
                    tabsUser.innerHTML = '<div class="alert">Данные не получены</div>';
                    throw new Error('Ошибка получения данных');
                }     
                var content = JSON.parse(this.response).data;

                tabsList.textContent = '';

                content.forEach(function(item, index) {
                    tabsList.innerHTML += '<div data-id="' + item.id + '" data-user="' + index + '" class="tabs__list-item">' + 'User ' + ++index + '</div>';
                });

                tabsList.children[target.dataset.user].classList.add('active');

                tabsUser.innerHTML = '<div class="tabs__users-wrapper">' + 
                                     '<img class="tabs__users-img" src="' + 
                                     content[target.dataset.user].avatar + '" alt="' + 
                                     content[target.dataset.user].first_name + ' ' + 
                                     content[target.dataset.user].last_name + '">' + '</div>' +
                                     '<div class="tabs__users-data">' +
                                     '<p class="first_name">First Name: ' + content[target.dataset.user].first_name + '</p>' + 
                                     '<p class="last_name">Last Name: ' + content[target.dataset.user].last_name + '</p>' + '</div>';    
            
                if (!localStorage.getItem(target.dataset.id)) {
                    localStorage.setItem(target.dataset.id, tabsUser.innerHTML);
                }      
            } catch (err) {
                tabsUser.innerHTML = '<div class="alert">Ошибка получения данных, попробуйте в следующий раз</div>';
                console.error(err + ' Данные не получены');
            }
        } else {
            tabsUser.innerHTML = '<div class="alert">Ошибка получения данных, попробуйте в следующий раз</div>';
        }
    };

    xhr.onerror = function() {
        tabsUser.innerHTML = '<div class="alert">Ошибка получения данных, попробуйте в следующий раз</div>';
    };      
}

function getUserAjaxButton(e) {
    e.preventDefault(); 

    button.classList.add('disabled');

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();

    xhr.onload = function() {
        var statusType = +String(this.status)[0];
        if (statusType === 2) {
            try {
                if (!JSON.parse(this.response).data.length || !JSON.parse(this.response).data[0].first_name) {
                    tabsUser.innerHTML = '<strong>Ошибка получения данных</strong>';
                    throw new Error('Ошибка');
                }     
                var content = JSON.parse(this.response).data;

                tabsList.textContent = '';

                content.forEach(function(item, index) {
                    tabsList.innerHTML += '<div data-id="' + item.id + '" data-user="' + index + '" class="tabs__list-item">' + 'User ' + ++index + '</div>';
                });

                tabsList.children[0].classList.add('active');
                tabsUser.innerHTML = '<div class="tabs__users-wrapper">' + 
                                     '<img class="tabs__users-img" src="' + 
                                     content[0].avatar + '" alt="' + 
                                     content[0].first_name + ' ' + 
                                     content[0].last_name + '">' + '</div>' +
                                     '<div class="tabs__users-data">' +
                                     '<p class="first_name">First Name: ' + content[0].first_name + '</p>' +
                                     '<p class="last_name">Last Name: ' + content[0].last_name + '</p>' + '</div>';            

                if (!localStorage.getItem(tabsList.firstChild.dataset.id)) {
                    localStorage.setItem(tabsList.firstChild.dataset.id, tabsUser.innerHTML);
                }       
            } catch (err) {
              tabsUser.innerHTML = '<div class="alert">Ошибка получения данных, попробуйте в следующий раз</div>';
                console.error(err + ' Данные не получены');
            }
        } else {
            tabsUser.innerHTML = '<div class="alert">Ошибка получения данных, попробуйте в следующий раз</div>';
        }  
    };

    xhr.onerror = function() {
        tabsUser.innerHTML = '<div class="alert">Ошибка получения данных, попробуйте в следующий раз</div>';
    };    
  
}
