ymaps.ready(init);

function init()
{

    // Создание экземпляра карты.
    var map = new ymaps.Map('map',
        {
            center: [70.385555, 68.410034],
            zoom: 5,
            controls: ['zoomControl'],
            behaviors: ['drag', 'scrollZoom'],
            type:'yandex#satellite'
        },
        {
            searchControlProvider: 'yandex#search'
        }),
        // Контейнер для меню.

        menu = $('<ul class="menu"></ul>');
    for (var i = 0, l = groups.length; i < l; i++)
    {
        createMenuGroup(groups[i]);
    }

    function createMenuGroup (group) {
        // Пункт меню.
        var menuItem = $('<li class="menuItem"><a type="button">' + group.name + '</a></li>'),
        // Коллекция для геообъектов группы.
            collection = new ymaps.GeoObjectCollection(null, { preset: group.style }),
        // Контейнер для подменю.
            submenu = $('<ul class="submenu list-group"></ul>');

        // Добавляем коллекцию на карту.
        map.geoObjects.add(collection);
        // Добавляем подменю.
        menuItem
            .append(submenu)
            // Добавляем пункт в меню.
            .appendTo(menu)
            // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
            .find('a')
            .bind('click', function () {
                if (collection.getParent()) {
                    map.geoObjects.remove(collection);
                    submenu.hide();
                } else {
                    map.geoObjects.add(collection);
                    submenu.show();
                }
            });
        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection, submenu);
        }
    }

    function createSubMenu (item, collection, submenu) {
        // Пункт подменю.
        var submenuItem = $('<li class="subItem list-group-item"><a type="button">' + item.name + '</a></li>'),
        // Создаем метку.
            placemark = new ymaps.Placemark(item.center,{
                        balloonContentHeader: item.ContentHeader.join(''),
                        // Зададим содержимое основной части балуна.
                        balloonContentBody: item.ContentBody.join(''),
                        // Зададим содержимое нижней части балуна.
                        balloonContentFooter: item.ContentFooter.join(''),
                        // Зададим содержимое всплывающей подсказки.
                hintContent:item.hint.join('')});

        // Добавляем метку в коллекцию.
        collection.add(placemark);
        // Добавляем пункт в подменю.
        submenuItem
            .appendTo(submenu)
            // При клике по пункту подменю открываем/закрываем баллун у метки.
            .find('a')
            .bind('click', function ()
            {
                if (!placemark.balloon.isOpen()) {placemark.balloon.open();}
                //$(this).addClass('active').siblings().removeClass('active')}
            })
            .bind('click', function ()
            {
                //if (!placemark.balloon.isOpen()) {placemark.balloon.open();} else {placemark.balloon.close();}
                map.panTo(item.center,{flying:3,duration:1500})
                return false;
            })
        document.querySelector('#elastic').oninput = function(){
            let val = this.value.trim();
            let elasticItems = document.querySelectorAll('.subItem');
            if (val){
                elasticItems.forEach(function(elem){
                    if (elem.innerText.search(val) == -1) {
                        elem.classList.add('hide');
                        // elem.innerHTML = elem.innerText;
                    }
                    else {
                        elem.classList.remove('hide');
                        let str = elem.innerText;
                        // elem.innerHTML = insertMark(str,elem.innerText.search(val), val.length);
                    }
                });
            }
            else{
                elasticItems.forEach(function(elem){
                        elem.classList.remove('hide');
                        // elem.innerHTML = elem.innerText;
                    }

                );
            }
        }
        // function insertMark(string, pos, len){
        //     return string.slice(0, pos) + '<mark1>' + string.slice(pos, pos + len) + '</mark1>' + string.slice(pos+len);
        //
        // }
    }

    // Добавляем меню в тэг BODY.

$(menu).appendTo("#menu_list");


}
