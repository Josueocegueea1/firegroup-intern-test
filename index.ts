import inquirer, { Answers } from "inquirer";
import shell, { find } from "shelljs";
import readLine from "readline";
import { findMax5 } from "./findMax5";
import findFrequent from "./findFrequent";

console.log(
  "\n\nHi! This is Quang Pham's attemp at FireGroup's Intern Test, question 1\n\n"
);

inquirer
  .prompt([
    {
      name: "mode",
      type: "list",
      message: "How do you want to review my attemp?",
      choices: [
        "Input my own data",
        "Run test cases specified in the Intern Test Form",
      ],
    },
  ])
  .then((answers: any) => {
    if (answers.mode === "Input my own data") {
      letUserInputData();
    } else {
      shell.exec("npm test");
    }
  })
  .catch((error: any) => {
    console.error("Oh no, something went wrong :(", error);
  });

function letUserInputData(): void {
  inquirer
    .prompt([
      {
        name: "question",
        message: "Which question?",
        type: "list",
        choices: ["Question 1: findMax5", "Question 2: findFrequent", "Exit"],
      },
    ])
    .then((answers: any) => {
      switch (answers.question) {
        case "Question 1: findMax5":
          runFindMax5WithUserInput();
          break;
        case "Question 2: findFrequent":
          runFindFrequentWithUserInput();
          break;
        case "Exit":
          console.log("\n\nThank you for your time! Bye bye!\n\n");
          break;
      }
    });
}

function runFindMax5WithUserInput() {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Please enter your data (comma separated): ",
    function (data: string) {
      const strs = data.replace(/\s+/, "").split(",");
      const numbers: number[] = [];

      strs.forEach((str) => {
        const sanitizedNumber = parseInt(str);
        if (!sanitizedNumber) {
          console.warn(`'${str}' is not a valid integer and is ignored`);
        } else {
          numbers.push(sanitizedNumber);
        }
      });
      console.log("ANSWER: ", findMax5(numbers));
      rl.close();
      letUserInputData();
    }
  );
}

function runFindFrequentWithUserInput() {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Please enter your data (comma separated): ",
    function (data: string) {
      const strs = data.split(",");

      console.log("ANSWER: ", findFrequent(strs));
      rl.close();
      letUserInputData();
    }
  );
}
