'use strict';

//Задание 1

//способ а) через if

let array = [];
let lang = 'ru';

if (lang === 'en') {
    array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'];
    console.log(array);
} else if (lang === 'ru') {
    array = ['Понедельник', 'Вторник', 'Среда',
        'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    console.log(array);
};

//способ b) через switch-case

/*
const lang = 'ru';
const arrayEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];
const arrayRu = ['Понедельник', 'Вторник', 'Среда',
    'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

switch (true) {
    case lang === 'en':
        console.log(arrayEn);
        break
    case lang === 'ru':
        console.log(arrayRu);
        break
};
*/

//способ с) через многомерный массив

/*
const array = [];
const lang = 'en';

array['ru'] = ['Понедельник', 'Вторник', 'Среда',
    'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
array['en'] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];

console.log(array[lang]);
*/

//Задание 2

/*
let namePerson = "Александр";

let post = (namePerson === "Артем")
    ? "Директор"
    : (namePerson === "Александр")
        ? "Преподаватель"
        : "Студент";

console.log(post);
*/