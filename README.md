# Russian Arctic Vegetation Archive

## Описание
Проект представляет собой [сайт-архив](https://avarus.space/) для ИПЭЭ РАН. В нем содержится информация по местности (Российской Арктике).
Создание Arctic Vegetation Archive (AVA) является международной инициативой научного сообщества по аккумуляции и распространению наземных данных о растительности Арктики.

## Оглавление
* [Описание](#Описание)
* [Оглавление](#Оглавление)
* [Начало работы](#Начало-работы)
    * [Виртуальная рабчая среда (venv)](#Виртуальная-рабочая-среда)
    * [Django, Django CMS](#Django-Django-CMS)
    * [Запуск проекта](#Запуск-проекта)
* [Эксплуатация](#Эксплуатация)
    * [Основные модули](#Основные-модули)
    * [Многоязычность сайта](#Многоязычность-сайта)
    * [Распределение прав доступа](#Распределение-прав-доступа)

## Начало работы
## Виртуальная рабочая среда
Перед запуском проекта нужно скачать ноебходимое виртуальное окружения.
Для начала создайте и активируйте виртуальную среду:
```
py -m venv env
env\Scripts\activate
```
 Далее в вашей IDE нужно установить последнюю версию pip:
```
pip install --upgrade pip
```
### Django, Django CMS
Установщик django CMS - это полезный скрипт, который позаботится о настройке нового проекта.
```
pip install djangocms-installer
```
### Запуск проекта
Код для запуска проекта из директории проекта.

Widnows:
```
python manage.py runserver
```
Откройте http: // localhost: 8000 / в своем браузере, где вас должны пригласить для входа в систему, а затем создайте новую страницу.
## Эксплуатация
### Основные модули
В директории проекта находятся два основных модуля, которые отвечают за функционал веб-приложения. Найти их можно в директории mysite/.
Первый основной модуль - accounts, в нем обрабатывается информация о пользователях в момент регистрации и авторизации их на сайте.
Вторым основным модулем является - catalog. Здесь обрабатывается информация из панели администрирования сайта, формы обратной связи.

1. mysite/accounts 
2. mysite/catalog

### Многоязычность сайта

Для создания перевода в шаблонах html используются следующие теги:
Для подгрузки тегов на страницу
```
{% load i18n %}
```
Для перевода контекста страницы
```
{% trans "context" %}
```
Перевод осуществляется вручную в директории locale/
```
//Создать файл для перевода
django-admin makemessages -l ru

//Обработка готовых переводов
django-admin compilemessages
```

### Распределение прав доступа
Работы с административной панелью осуществляется во вкладке Administartion... в сms-панели.
Права доступа выдает и редактирует главный администратор сайта в разделе Users > USER PERMISSIONS.


