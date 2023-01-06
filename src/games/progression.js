import game from '../index.js';

// Функция нахождения случайного числа
const getRandomInt = (min, max) => {
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

const brainProgression = () => {
  const difference = getRandomInt(1, 7);
  let currentInt = getRandomInt(0, 25);
  const arithmeticProgression = [];

  for (let i = 0; i !== 10; i += 1) {
    arithmeticProgression.push(currentInt);
    currentInt += difference;
  };

  const index = getRandomInt(0, 9);
  const correctAnswer =  arithmeticProgression[index];

  arithmeticProgression[index] = '..';
  const question = arithmeticProgression.join(' ');

  return [question, String(correctAnswer)];
};

const questionGame = 'What number is missing in the progression?';
const progressionAndCorrectAnswer = () => brainProgression();

const progressionStart = () => game(questionGame, progressionAndCorrectAnswer);

export default progressionStart;
