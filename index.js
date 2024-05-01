#! /usr/bin/env node
import chalk from 'chalk'; //Import chalk
import inquirer from "inquirer"; //Ipmort Inquirer
// 1)computer will generate a random number. Done
// 2) User input for guesimg number. Done
// 3) Compare user input with computer generated number and show result. Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.bgBlueBright("Please guess a number between 1 to 6 :"),
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.green("Congratulations! You guessed right number"));
}
else {
    console.log(chalk.red("You guessed wrong number"));
}
