import readlineSync from 'readline-sync';

const game = (questionGame, expressionAndCorrectAnswer) => {
  console.log('Welcome to the Brain Games!'); // общее приветствие
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`); // приветствуем игрока по имени
  console.log(questionGame); // вопрос для игры

  for (let i = 0; i !== 3; i += 1) {
    const [expression, correctAnswer] = expressionAndCorrectAnswer();
    const answerUser = readlineSync.question(`Question: ${expression} \nYour answer: `);

    if (answerUser === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}!`);
      break;
    }

    if (i === 2) { // считае кол-во раундов, начиная с 0
      console.log(`Congratulations! ${userName}!`);
    }
  }
};
export default game;
