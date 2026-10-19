const num1 = 10;
const num2 = 40;
const num3 = 60;

console.log(Math.max(num1, num2, num3));

const age = 20;

if (age >= 18 && age <= 60) {
  console.log(true);
} else {
  console.log(false);
}

const username = "admin";
const password = "admin123";

// const usernames = prompt('введите username')
// const pass = prompt('введите пароль')

// if (usernames === username && pass === password) {
//     console.log('“Вы успешно вошли в систему”')
// }else {
//     console.log('“Некорректный username или пароль” ')
// }

let count = 0;

const ques1 = "js";
const ques2 = "Css";
const ques3 = "Html";
const ques4 = "React";
const ques5 = "FullStack";

// const ques1s = prompt('на каком языке прогграмирования пишут логику сайта')
// const ques2s = prompt('на чем пишут стили сайта')
// const ques3s = prompt('на чем делают разметку сайта')
// const ques4s = prompt('что изучают на 4 месяце в гикс fullstack')
// const ques5s = prompt('фронтенд и бэкэнд в одном это')

// if (ques1s === ques1) count++;
// if (ques2s === ques2) count++;
// if (ques3s === ques3) count++;
// if (ques4s === ques4) count++;
// if (ques5s === ques5) count++;

console.log(`Вы правильно ответили на ${count} вопросов из 5`);

const numss = 28;

if (numss % 2 === 0 && numss % 7 === 0) {
  console.log("Подходит");
} else {
  console.log("Не Подходит");
}

const total = 5001;

if (total > 5000) {
  console.log(Math.floor(total * 0.9));
} else {
  console.log(total);
}

const vowels = "a, e, i, o, u";

const prompts = prompt("введите 1 символ");

if (vowels.includes(prompts)) {
  console.log(true);
} else {
  console.log(false);
}

const userInput = prompt("Введите число:");
const percentInput = prompt("Введите процент, который нужно найти:");

if (isNaN(number) || isNaN(percent)) {
  console.log("Ошибка: Вы ввели не число!");
} else {
  const result = (number * percent) / 100;

  console.log(`${percent}% от числа ${number} равно ${result}`);
}
