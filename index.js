#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("\n\t *** Welcome to CLI Number Guessing Game by Mehmil Zeeshan***\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
let guessedNumber = await inquirer.prompt([
    {
        name: "NumberGuessedbyuser",
        type: "number",
        message: "Please enter the number you guessed (limit: from 1 to 5) I hope you guess it right Good luck !"
    }
]);
if (guessedNumber.NumberGuessedbyuser === randomNumber) {
    console.log(`Congratulions You have guessed a correct number , the number was ${randomNumber}`);
}
else {
    console.log(`Opps you guessed a wrong number, the number was ${randomNumber} try again!`);
}
console.log("Thank you for playing ClI Number Guessing Game I hope you are entertained !");
