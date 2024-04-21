import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "length", type: "number", message: "what is length of rectengle?" },
    { name: "width", type: "number", message: "what is width of rectengle?" },
]);
if (answer.length > 0 && answer.width > 0) {
    console.log(answer.length * answer.width);
}
