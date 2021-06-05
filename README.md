# AVA Веб-архив арктических экспедиций

## Описание
Проект представляет собой [сайт-архив](https://avarus.space/) для ИПЭЭ РАН. В нем содержится информация по местности (Российской Арктике).

## Оглавление
* [Описание](#Описание)
* [Оглавление](#Оглавление)
* [Начало работы](#Начало-работы)
    * [Виртуальная рабчая среда (venv)](#Виртуальная-рабочая-среда)
    * [Django, Django CMS](#Django,-Django CMS)
    * [Запуск проекта](#Запуск-проекта)
* [Эксплуатация](#Эксплуатация)
    * [Основные модули](#Основные-модули)
    * [Базы данных](#Базы-данных)
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

### Базы данных

В файле mysite/settings.py находятся основные конфигурации проекта. 
В разделе DATABASES подключены SQLite3 и PostgreSQL.
```
DATABASES = {
    'default': {
        'CONN_MAX_AGE': 0,
        'ENGINE': 'django.db.backends.sqlite3',
        'HOST': 'localhost',
        'NAME': 'project.db',
        'PASSWORD': '',
        'PORT': '',
        'USER': '',

    },
    'users': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': 'localhost',
        'NAME': 'ava2',
        'PASSWORD': 'pjkjnjtz,kjrj',
        'PORT': '5432',
        'USER': 'postgres',
    }
}
```
Основной базой данных является sqlite3. Базой данных для продакшен версии является postgresql, она содержит информацию о модулях admin, auth и catalog.
Для синхронизации баз данных используются следуюзие команды:
```
python manage.py migrate auth --database=users
python manage.py migrate admin --database=users
python manage.py migrate catalog --database=users
```
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


