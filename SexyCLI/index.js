#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import animation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => {
  return new Promise((r) => setTimeout(r, ms));
};

const welcome = async () => {
  console.log(chalk.bgGreen("hi mom"));
  const rainbowTitle = animation.rainbow("Who wants to be a millionaire?\n");
  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue("HOW TO PLAY")}
    I AM THE PROCESS ON YOUR COMPUTER
    IF YOU GET ANY QUESTIONS WRONG I WILL BE ${chalk.bgRed("KILLED")}
    SO GET ALL THE QUESTIONS CORRECT
  `);
};

const askName = async () => {
  const answer = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player";
    },
  });
  return answer.player_name;
};

const question1 = async () => {
  const answers = await inquirer.prompt({
    name: "question1",
    type: "list",
    message: "JavaScaript was created in 10 days then released on\n",
    choices: [
      "May 23rd, 1995",
      "Nov 24th, 1995",
      "Dec 4th, 1995",
      "Dec 17, 1996",
    ],
  });
  return handleAnswer(answers.question1 == "Dec 4th, 1995");
};

const handleAnswer = async (isCorrect) => {
  const spinner = createSpinner("Checking Answer...");
  spinner.start();
  await sleep();

  if (isCorrect) {
    spinner.success();
  } else {
    spinner.error();
    process.exit(1);
  }
};

const banner = async () => {
  const msg = `
    Congrats ${playerName}! You Won!
  `;
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
};

await welcome();
await askName();
await question1();
await banner();
