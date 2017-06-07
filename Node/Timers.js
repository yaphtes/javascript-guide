// Планирует вызов cb с аргементами args через ms
setTimeout(cb, ms, ...args)  // => timer

// Планирует периодические вызовы cb с аргументами args через каждые ms
setInterval(cb, ms, ...args)  // => timer

// Создает мобытие, но это событие имеет более высокий приоритет, чем
// события созданные setTimeout и setInterval. Однако, при этом оно не
// превосходит по приоритету события ввода/выводода и с ним не связывается
// собственный таймер (что за собственный таймер??). Собитие setImmediate
// генерируется после всех событий ввода/вывода, до событий setTimeout/Interval,
// и в текущей очереди событий. Если вызвать его из функции обратного вызова,
// то оно помещается в следующий цикл событий после завершения того цикла,
// в котором оно было вызвано.
setImmediate(cb, ms, ...args);  // => timer



/*** <<< timer >>> ***/

// Если вызвать unref() для таймера и это единственное событие в очереди
// событий, то таймер отменяется, а программа сможет завершиться
timer.unref()

// Если вызвать ref() для таймера, программа буедт выполняться до тех пор,
// пока таймер не будет обработан (стандартное поведение??)
timer.ref()