import inquirer from "inquirer";
const result = await inquirer.prompt([
    { massage: "Enter first number", type: "number", name: "firstNumber" },
    { massage: "Enter first number", type: "number", name: "secondNumber" },
    { massage: "Select one of the operator to perform your operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiply", "Division"],
    },
]);
// codition
if (result.operator === "Addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "Subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "Multiply") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "Division") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("Please select valid operator");
}
