'use strict';

// Задание №1
const arrStr = ['module.jsx', 'index.html', 'style.css',
  'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const filterStr = (arr) => {
  const regExpJs = /.js/i;
  const regExpJsx = /.jsx/i;
  const regExpTs = /.ts/i;

  const newArr = arr.filter((word) => {
    if (regExpJs.test(word) || regExpJsx.test(word) || regExpTs.test(word)) {
      return word;
    }
  });

  return newArr;
};

console.log(filterStr(arrStr));

// Задание №2
const emailRegexp = /^([a-z0-9_])+@[a-zA-Z]{3,}?\.[a-zA-Z]{2,5}/i;

console.log(emailRegexp.test('info@methed.ru'));
console.log(emailRegexp.test('max24@mail.com'));
console.log(emailRegexp.test('java_script@google.io'));
console.log(emailRegexp.test('my-mail@yandex.ru'));
console.log(emailRegexp.test('tom_yam@ya.ru'));
console.log(emailRegexp.test('zero@mai1.xyz'));

// Задание №3
const strTest = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';
const regExpBrackets = /\(([^)]*)\)*/gi;

const test = strTest.match(regExpBrackets);

console.log(test);


// Задание №4

const replaceTag = (str) => {
  const regExp = /[\w{1,}]+\.{1}[A-Za-zА-Яа-я0-9]{2,8}/gi;
  const arr = str.split(' ');
  let newStr = '';
  for (const word of arr) {
    if (regExp.test(word)) {
      const changeStr = `<a href="http://${word}">${word}</a>`;
      const result = word.replace(regExp, changeStr);
      newStr += result + ' ';
    } else {
      newStr += word + ' ';
    }
  }
  return newStr;
};

console.log(replaceTag('vcvcv site.ru dsdsdsdsd google.com'));
