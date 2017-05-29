// Создает объект ошибки, затем оператор throw пробрасывает исключение, с данным объектом ошибки
throw new Error(message: string)

// Нестандартная функция, получает текущий stack trace и записывает его в this объекта new Error.
// fun - функция, до которой будет собираться stack trace
Error.captureStackTrace(this: object, fun: function);

// Имя ошибка
Error.prototype.name

// Сообщение ошибки
Error.prototype.message