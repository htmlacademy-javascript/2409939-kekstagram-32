// Функция для проверки длины строки.
const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20); // true

//Функция для проверки, является ли строка палиндромом
const isStringPalindrome = (string) => {
  const normalization = string.replaceAll(' ', '').toLowerCase();
  const emptiness = normalization.split('').reverse().join('');
  return normalization === emptiness;
};

isStringPalindrome('Лёша на полке клопа нашёл ');
