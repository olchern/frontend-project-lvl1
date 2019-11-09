import readlineSync from 'readline-sync';

const levelsCount = 3;
console.log('Welcome to the Brain Games!\n');
export const userName = readlineSync.question('May I have your name? ');

const flow = (getLevelTask, descriptionGame) => {
  console.log(`Hello, ${userName}!\n`);
  console.log(`${descriptionGame}\n`);
  const iter = (counter) => {
    if (counter > levelsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const [question, answer] = getLevelTask();
    console.log(`Question: ${question}`);
    const actual = readlineSync.question('Your answer: ');

    if (actual !== answer) {
      console.log(`'${actual}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    iter(counter + 1);
  };

  iter(1);
};

export default flow;
