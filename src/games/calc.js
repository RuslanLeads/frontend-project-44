import game from '../index.js';

// Функция нахождения случайного числа
const getRandomInt = (min, max) => {
  const result = Math.random() * (max - min);
  return Math.floor(result);
};

// Функция принимает выражение в строке и высчитывает правильный результат
const calculator = (expression) => {
  const array = expression.split(' ');
  switch (array[1]) {
    case '+':
      return Number(array[0]) + Number(array[2]);
    case '-':
      return Number(array[0]) - Number(array[2]);
    case '*':
      return Number(array[0]) * Number(array[2]);
    default:
      break;
  }
  return null;
};

const calc = () => {
  const number1 = getRandomInt(1, 10); // случайное число 1
  const number2 = getRandomInt(1, 10); // случайное число 2

  const operators = ['+', '-', '*'];
  const randomKey = Math.floor(Math.random() * operators.length); // случайный индекс массива
  const randomOperator = operators[randomKey]; // получаем случайный оператор

  const expression = `${number1} ${randomOperator} ${number2}`; // готовое выражение (4 * 1)
  const correctAnswer = calculator(expression);

  return [expression, String(correctAnswer)];
};

const questionGame = 'What is the result of the expression?';
const expressionAndCorrectAnswer = () => calc();

const calcStart = () => game(questionGame, expressionAndCorrectAnswer);

export default calcStart;
