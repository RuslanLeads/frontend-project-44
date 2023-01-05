import game from '../index.js';

// Функция нахождения случайного числа
const getRandomInt = (min, max) => {
  const result = Math.random() * (max - min);
  return Math.floor(result);
};

const brainEven = () => {
  const randomNumber = getRandomInt(1, 10); // рандомное число
  const correctAnswer = (randomNum) => (randomNum % 2 === 0 ? 'yes' : 'no');
  return [randomNumber, correctAnswer(randomNumber)];
};
const questionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const randomNumberAndCorrectAnswer = () => brainEven();

const evenStart = () => game(questionGame, randomNumberAndCorrectAnswer);

export default evenStart;
