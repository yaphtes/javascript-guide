// Класс StringDecoder декодерует содержимое буфера в строки utf-8, он делает это
// с улучшенной гибкостью и возможностями восстановления данных, в отличии от Buffer.prototype.toString()

// Если Buffer.prototype.toString() получает неполную последовательность символов utf-8, он вернет бессмыслицу.
// Классно то, что StringDecoder сохраняет неполную последовательность до тех пор, пока она не будет
// завершена, после чего возвращает результат. Если мы получаем результат в кодеровке utf-8 по фрагментам в
// потоке, необходимо использовать StringDecoder.

let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf-8');

// Возвращает декодированную строку, гарантирующую, что любые неполные многобайтовые символы в конце буфера опущены
// из возвращенной строки и сохранены во внутреннем буфере для следующего вызова decoder.write() или decoder.end()
decoder.write(buffer);

// Возвращает оставшиеся декодированные биты из буфера. Байты, представляющие неполные символы UTF-8 и UTF-16,
// заменяются символами подстановки, соответствующими кодировке символов
decoder.end(buffer);