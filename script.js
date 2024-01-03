'use strict';

//Задание 1

//способ а) через if
const array = [];
const lang = 'en';

array['ru'] = ['Понедельник', 'Вторник', 'Среда',
    'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
array['en'] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];



if (lang === 'en') {
    console.log(array[lang]);
} else if (lang === 'ru') {
    console.log(array[lang]);
};


//способ b) через switch-case

/*
switch (true) {
    case lang === 'en':
        console.log(array[lang]);
        break
    case lang === 'ru':
        console.log(array[lang]);
        break
};
*/

//способ с) через многомерный массив

/*
console.log(array[lang]);
*/

//Задание 2


let namePerson = "Александр";

let post = (namePerson === "Артем")
    ? "Директор"
    : (namePerson === "Александр")
        ? "Преподаватель"
        : "Студент";

console.log(post);
