// Возвращает итоговое местонахождение загружаемого модуля
require.resolve('module');

// "Раскешировать" загруженный модуль
delete require('module');

// Загружает и кеширует модуль
require('module')  // => module.exports

// объект модуля
module

// Ссылка на module.exports
exports

// Экспортируемые данные модуля
module.exports

// ссылка на родительский модуль, т.е. модуль который require`ит данный
module.parent

// полное имя файла модуля, с учетом пути
module.filename  // => string

// загрузился ли модуль
module.loaded  // => boolean


// PS:
// 0. Модуль или приложение?
// Используем if (module.parent) { exports.run = run } else { run() }

// 1. Модуль-функция
// module.exports = function

// 2. Модули кэшируются
// Один раз подключились, инициализировали и пользуемся объектом, т.е. заного файл модуля никогда не читается

// 3. Расположение модулей: порядок поиска
// Если путь указан так require('./db' || '../db' || '/db') - ищем в указанной папке
// Если путь указан так require('db'), то ищем папке node_modules, папка node_modules может находиться где угодно, поиск
// происходит "снизу вверх"

// 4. Передаем аргументы в модуль: конфигурируемый модуль
// этот паттерн заключается в том, что мы подключаем модуль через require и тут же передаем ему аргументы:
// let log = require('logger')(module);
