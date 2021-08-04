/*1. Write a JavaScript program to display the current day and time in the following format.Go to the editor
Sample Output: Today is: Tuesday.
Current time is: 10 PM: 30 : 38*/

let date = new Date();
let day = date.getDay() - 1;
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let days_array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let appended_value = (hours >= 12) ? " PM" : " AM";
hours = (hours >= 12) ? hours - 12 : hours;

console.log(`Today is ${days_array[day]}`);
console.log(`Current time : ${hours} ${appended_value} : ${minutes} : ${seconds}`);

/*2. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". */

let button = document.querySelector("button[type=submit]")
let reset = document.querySelector("button[type=reset]")

button.addEventListener("click", () => {
    let input_value = document.getElementById("number").value;
    let random_number = Math.round(Math.random() * 11)
        (input_value === random_number) ? alert("Good work!") : alert("Not matched")
})

reset.addEventListener("click", () => {
    document.getElementById("number").value = "";
})

//3. Write a JavaScript program to calculate days left until next Christmas.
let another_date = new Date();
let today = another_date.getTime();
let another_day = another_date.getDate();
let another_month = another_date.getMonth() + 1;
let another_year = another_date.getFullYear();
let christmas;

if (another_month === 12 && another_day > 24) {
    christmas = new Date(`${another_year + 1}-12-24`)
} else {
    christmas = new Date(`${another_year}-12-24`)
}

let christmas_time = christmas.getTime();

let seconds_left = today - christmas_time; scroll

var seconds_to_days = 1000 * 60 * 60 * 24;

let days_left_to_christmas = Math.abs(Math.round(seconds_left / seconds_to_days))

console.log(`${days_left_to_christmas} days till Christmas`)








