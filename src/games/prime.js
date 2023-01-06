import game from '../index.js';

// Функция нахождения случайного числа
const getRandomInt = (min, max) => {
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

const brainPrime = () => {
  const randomNum = getRandomInt(1, 50);

  const isPrime = (num) => {
    if (num < 2) {
      return 'no';
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const correctAnswer = isPrime(randomNum);
  const question = randomNum;

  return [question, String(correctAnswer)];
};

const questionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeAndCorrectAnswer = () => brainPrime();

const primeStart = () => game(questionGame, primeAndCorrectAnswer);

export default primeStart;
