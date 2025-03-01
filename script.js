/*  Task 1 --> Age category message  */
// let userAge = Number(prompt("Please Enter your Age"));
// let userMessage;
// /* Using If Else */
// if(userAge <= 17 ){
//     userMessage = "Your are a minor.";
// } else if(userAge >= 18 && userAge <= 60){
//     userMessage = "Your are an adult";
// } else{
//     userMessage = "You are a senior citizen";
// }
// console.log(userMessage);

/* Using Ternary Operator */
// userMessage = (userAge <= 17) ? "You are a minor": (userAge >= 18 && userAge <= 60) ? "You are a adult" : "You are a senior citizen";

// console.log(userMessage);

/* Task 2 --> Even or Odd Sum  */
// let firstNum = Number(prompt("Enter you first number"));
// let secondNum = Number(prompt("Enter your second Number"));

// let sum = firstNum + secondNum;
// let checkOddEven;

/* Using IF ELSE */
// if(sum % 2 == 0){
//     checkOddEven = `${sum} is Even Value`;
// }else{
//     checkOddEven = sum + " is Odd value";
// }
// console.log(checkOddEven);

/* Using Ternary Operator */
// checkOddEven = (sum % 2 == 0)? `${sum} is Even` : `${sum} is Odd`;
// console.log(checkOddEven);

/* Task 3 --> Character Case Checker */
// let enterChar = prompt("Enter a Character");
// let charOutput;
// if(enterChar == enterChar.toUpperCase() && enterChar.length == 1){
//     charOutput = "Character is UpperCase";
// }else if(enterChar == enterChar.toLowerCase() && enterChar.length == 1){
//     charOutput = "Character is LowerCase";
// }else{
//     charOutput = "Is not a Character";
// }
// console.log(charOutput);

/* Task 4 --> Largest of Three number  */
// let firstNum = Number(prompt("Please enter a number"));
// let secondNum = Number(prompt("Please enter a Number"));
// let thirdNum = Number(prompt("Please enter a number"));

/* Using Math.max */
// let largestNumber_1 = Math.max(firstNum, secondNum, thirdNum);

// console.log(largestNumber_1);

/* Using If else if */
// let largestNumber;
// if(firstNum > secondNum && firstNum > thirdNum){
//     largestNumber = firstNum;
// }else if(secondNum > thirdNum){
//     largestNumber = secondNum;
// } else {
//     largestNumber = thirdNum;
// }

// console.log(largestNumber);

/* Using Ternary Operator */
// let largestNumber_2;
// (firstNum > secondNum && firstNum > thirdNum)? largestNumber_2 = firstNum : (secondNum > thirdNum)? largestNumber_2 = secondNum : largestNumber_2 = thirdNum;

// console.log(largestNumber_2);

/* Task 5 --> Leap Year Checker */
// let year = Number(prompt("Enter a Year to check it is a Leap Year or Not"));
// let leapResult;

// if(year % 4 === 0 && year % 100 != 0 || year % 400 === 0){
//     leapResult = `${year} is a Leap Year`;
// }else {
//     leapResult = `${year} is not a Leap Year`;
// }
// console.log(leapResult);


// let getYear = Number(prompt("Enter a Year"));
// const month = 2;
// let result;
// let checkDays = new Date(getYear, month, 0).getDate();
// if(checkDays === 29){
//     result = `${getYear} is Leap Year.`
// } else{
//     result = `${getYear} is Not Leap Year.`
// }

// console.log(result);

/* Task 6 --> Simple Calculator */

// let num_1 = Number(prompt("First Number", "Enter a Number"));
// let operatorPer = prompt("Enter Operator", "Enter Arithmetic Operator: +, -, *, /, % "); 
// let num_2 = Number(prompt("Second Number", "Enter a Number"));

// let calculate;

/* Using If else If */
// if(operatorPer == "+"){
//     calculate = num_1 + num_2;
// } else if(operatorPer == "-"){
//     calculate = num_1 - num_2;
// } else if(operatorPer == "*"){
//     calculate = num_1 * num_2;
// } else if(operatorPer == "/"){
//     calculate = num_1 / num_2;
// } else if(operatorPer == "%"){
//     calculate = num_1 % num_2;
// } else {
//     calculate = "Please Enter Valid Numbers or Operator";
// }
// console.log(calculate);

/* Using Ternary Operator */
// (operatorPer == "+") ? calculate = num_1 + num_2 : (operatorPer == "-") ? calculate = num_1 - num_2 : (operatorPer == "*") ? calculate = num_1 * num_2 : (operatorPer == "/") ? calculate = num_1 / num_2 : (operatorPer == "%") ? calculate = num_1 % num_2 :
// calculate = "Please Enter a Valid Numbers or Operator";

// console.log(calculate);

/* Task 7 --> Positive, Negative, or Zero */
// let checkPosNeg = 
// Number(prompt("Check Number ", "Enter a Number"));

// let outputNegPos;
/* Using If Else If */
// if(checkPosNeg > 0){
//     outputNegPos = `${checkPosNeg} is Positive Number.`
// } else if(checkPosNeg < 0){
//     outputNegPos = `${checkPosNeg} is Negative Number.`
// } else if(checkPosNeg == 0){
//     outputNegPos = `${checkPosNeg} is Zero`
// } else{ 
//     outputNegPos = `${checkPosNeg} : Is Not a Valid Number`;
// }

// console.log(outputNegPos);

/* Using Ternary Operator */

// (checkPosNeg > 0) ?  outputNegPos = `${checkPosNeg} is Positive Number.` : (checkPosNeg < 0) ?  outputNegPos = `${checkPosNeg} is Negative Number.` : (checkPosNeg == 0) ?  outputNegPos = `${checkPosNeg} is Not Positive or Negative` :  outputNegPos = `${checkPosNeg} : Is Not a Valid Number Please Enter valid number`;

// console.log(outputNegPos);

/* Task 8 --> User Greeting */

// let userName = prompt("Please Enter Your Name", "Arjul Rao");
// let userName = "Arjul"

// let dateTime = new Date();

// let hours = dateTime.getHours();

// let showMessage;
// if(hours >= 5 && hours < 12){
//     showMessage = `Good Morning, ${userName}`;
// } else if(hours >=12 && hours < 17){
//     showMessage = `Good Afternoon, ${userName}`;
// } else if(hours >= 17 && hours < 22){
//     showMessage = `Good Evening, ${userName}`;
// } else if((hours >= 22 && hours <= 24) || (hours < 5 )){
//     showMessage = `Good Night, ${userName}`;
// } else {
//     showMessage = `${userName}`;
// }
// console.log(showMessage);

/* Task 9 --> Traffic Light system */

// let lightColor = prompt("Please Enter the Light Color", "Red");

// lightColor = "green";
// let showColorMessage;

// if(lightColor.toUpperCase() == "RED"){
//     showColorMessage = "Stop!";
// } else if(lightColor.toUpperCase() == "YELLOW"){
//     showColorMessage = "Get Ready!";
// } else if(lightColor.toUpperCase() == "GREEN"){
//     showColorMessage = "Go!";
// } else{
//     showColorMessage = "Please pick the right color!";
// }
// console.log(showColorMessage);

/* Task 10 -->  Multiplication Table */

// let multNumber = Number(prompt("Please enter a Number", "2"));
// multNumber = 2;

/* Using variable */
// let multiplication;
// for(i = 1; i <=10; i++){
//     multiplication = multNumber * i;
//     console.log(multiplication);   
// }

/* Using An Array */
// let arr = [];
// for(i =1; i <=10; i++){
//     arr.push(multNumber * i);
// }
// console.log(arr);

/* Task 11 -->  Grade Calculator */

// let marks = Number(prompt("Please Enter user number", "70"));
// marks = 62;


// let grade;
// (marks <=100 && marks >= 90)? grade = "A" : (marks < 90 && marks >= 80)? grade = "B" : (marks < 80 && marks >= 70) ? grade = "C" : (marks < 70 && marks >= 60) ? grade = "D" : (marks < 60) ? grade = "F" : grade = "Please Enter valid Number";

// console.log(grade)

/* Task 12 --> Simple Login System */

// let loginUserName = prompt("Please Enter Your username", "XYZ");
// let loginPassword = prompt("Please Enter Your Password", "*******");

// let loginUserName = "arjulrao";
// let loginPassword = "rao123";

// let userLogin;
// if(loginUserName.toLowerCase() === "arjulrao" && loginPassword === "rao123"){
//     userLogin = "Login Successful"
// }else{
//     userLogin = "Incorrect User Name or Password";
// }
// console.log(userLogin);

/* Task 13 --> Swapping Without Third Variable */

// let firNum = 5;
// let secNum = 10;

// console.log(firNum);
// console.log(secNum);
// console.log(firNum, secNum);
// firNum = firNum + secNum;     /* firNum = 5 + 10 = 15 */
// secNum = firNum - secNum      /* secNum = 15 - 10 = 5 */
// console.log(secNum);
// firNum = firNum -secNum       /* firNum = 15 - 5 = 10 */
// console.log(firNum);

// console.log(firNum, secNum);

/* Task 14 --> FizzBuzz(Multiple of Both) */

// let fiBuzNum = Number(prompt("Please Enter the Number", "3"));

// if(fiBuzNum % 3 == 0 && fiBuzNum % 5 == 0){
//     console.log("FizzBuzz");
// } else if(fiBuzNum % 3 == 0){
//     console.log("Fizz");
// } else if(fiBuzNum % 5 == 0){
//     console.log("Buzz");
// } else{
//     console.log(fiBuzNum);
// }

/* Task 15 --> Number Reversal */

// let mainNumber = prompt("Please Enter the number", "123");

// let reversNumber = "";
// for(let i = mainNumber.length - 1; i >= 0; i--){
//     reversNumber += mainNumber[i];
// }
// reversNumber = Number(reversNumber);
// console.log(reversNumber);

/* Task 16 --> Sum of Digit */

// let strDigSum = prompt("Please Enter the Number", "123")

// let totelSum = 0;

// for(let i = 0; i < strDigSum.length; i++){
//     // console.log(+strDigSum[i]);
//     totelSum = totelSum + (+strDigSum[i]);
    
// }
// console.log(totelSum);


/* Task 17 -->  Palindrome Checker */

// let enterWord = prompt("Please Enter Palindrome Word", "Madam");

// let reversWord = "";

// for(let i = enterWord.length - 1; i >= 0; i--){  
//     reversWord += enterWord[i];
// }

// if(enterWord.toLowerCase() == reversWord.toLowerCase()){
//     console.log("Palindrome");
// } else{
//     console.log("Not a Palindrome");
// }

/* Task 18 --> Reverse Without Strings Methods  */

// let name = [1,2,3];

// let ans = name.reverse();
// console.log(ans)

/* Same as Question 15 */

/* Task 19 --> Find the second Largest */

// let num = prompt("Please Enter three number", "123");

// let num_1 = Number(prompt("Please Enter First number", "1"));
// let num_2 = Number(prompt("Please Enter Second number", "2"));
// let num_3 = Number(prompt("Please Enter Third number", "3"));


// let largestNumber;

// if((num_1 > num_2 && num_1 < num_3) || (num_1 > num_3 && num_1 < num_2)){
//     largestNumber = num_1;
// }else if((num_2 > num_1 && num_2 < num_3) || (num_2 > num_3 && num_2 < num_1)){
//     largestNumber = num_2;
// } else {
//     largestNumber = num_3;
// }

// console.log(largestNumber);


/* Task 20 --> Find First Non-repeating Character */

// let char = prompt("Enter a Word", "Hello");

// function firstNonRepChar(a) {
//     for(let i = 0; i < a.length; i++){
//         let letter = a[i];
//         if(a.indexOf(letter) == i && a.indexOf(letter, i + 1) == -1){
//             return letter;
//         }
//     }
//     return "NA"
// }
// let ans = firstNonRepChar((char.toLowerCase()));
// console.log(ans);

/* Task 21 --> Even Digit Counter */

// let evenCout = prompt("Enter a Number", "123");

// let allEvenNum = "";
// let totelCount = "Zero Count";
// for(let i = 0; i < evenCout.length; i++){
//     if(Number(evenCout[i]) % 2 == 0 && evenCout[i] != 0){
//         allEvenNum = allEvenNum + evenCout[i];
//         totelCount = allEvenNum.length;
//     }
// }
// console.log(allEvenNum);
// console.log(totelCount);

/* Task 22 --> Nested Condition Challenge */

// let userAge = Number(prompt("Enter Your Age", "18"));
// let userSalary = Number(prompt("Enter Your Salary", "20000"));

// let printMessage;
// if(userAge < 18){
//     printMessage = "Not Eligible";
// } else if(userAge >= 18){
//     if(userSalary <= 20000){
//         printMessage = "Low Salary";
//     } else if(userSalary >= 50000){
//         printMessage = "High Salary";
//     } else {
//         printMessage = "Medium Salary";
//     }
// }


// console.log(printMessage);


/* Task 23 --> Toggle Case */

// let toggleWord = prompt("Enter a word for Toggle", "HaPPY");

// let newToggleWord = "";

// for(let i = 0; i < toggleWord.length; i++){
//     if(toggleWord[i] == toggleWord[i].toUpperCase()){
//         newToggleWord = newToggleWord + toggleWord[i].toLowerCase();
//     } else if(toggleWord[i] == toggleWord[i].toLowerCase()){
//         newToggleWord = newToggleWord + toggleWord[i].toUpperCase();
//     }
// }

// console.log(newToggleWord);

/* Task 24 --> Find the Missing Number in a sequence  */

// let number = [1,2,3,5,6];

// function findMissingNumber(arr){
//     let n = arr.length + 1;
//     // console.log(n);
//     let expectedSum = (n * (n + 1)) / 2;
//     console.log(expectedSum);
//     let actualSum = arr.reduce((sum, num) => sum + num, 0);
//     console.log(actualSum)
//     return expectedSum - actualSum;
// }

// let missingNumber = findMissingNumber(number);
// console.log(missingNumber);

/* Task 25 --> Convert Number to Words */

let convertNum = Number(prompt("Enter a digit", 2));

let convertWord = "";

if(convertNum == 1){
    convertWord = "One";
} else if(convertNum == 2){
    convertWord = "Two";
} else if(convertNum == 3){
    convertWord = "Three";
} else if(convertNum == 4){
    convertWord = "Fourth";
} else if(convertNum == 5){
    convertWord = "Five";
} else if(convertNum == 6){
    convertWord == 7;
} else if(convertNum == 8){
    convertWord == "Eight";
} else if(convertNum == 9){
    convertWord == "Nine";
} else{
    convertWord = convertNum;
}
console.log(convertWord);