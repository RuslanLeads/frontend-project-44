import game from '../index.js';

// Функция нахождения случайного числа
const getRandomInt = (min, max) => {
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

const brainGcd = () => {
  const randomNumber1 = getRandomInt(2, 15); // рандомное число
  const randomNumber2 = getRandomInt(2, 15); // рандомное число

  // Определяем наименьшее и наибольшее число
  const largestNumber = randomNumber1 > randomNumber2 ? randomNumber1 : randomNumber2;
  const smallestNumber = randomNumber1 < randomNumber2 ? randomNumber1 : randomNumber2;

  const largestDivisor = (smallest, largest) => {
    if (largest % smallest === 0 || largest === smallest) {
      return smallest;
    }
    const iter = (counter, smallestNum, largestNum) => {
      if (largestNum % counter === 0 && smallestNum % counter === 0) {
        return counter;
      }
      return iter(counter - 1, smallestNum, largestNum);
    };
    return iter(smallest, smallest, largest);
  };

  const correctAnswer = largestDivisor(smallestNumber, largestNumber);
  const question = `${randomNumber1} ${randomNumber2}`;
  return [question, String(correctAnswer)];
};

const questionGame = 'Find the greatest common divisor of given numbers.';
const gcdAndCorrectAnswer = () => brainGcd();

const gcdStart = () => game(questionGame, gcdAndCorrectAnswer);

export default gcdStart;
