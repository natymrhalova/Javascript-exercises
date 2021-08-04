//Exercises sourced from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
const date = new Date();
const body = document.body;
/*1. Write a JavaScript program to display the current day and time in the following format.Go to the editor
Sample Output: Today is: Tuesday.
Current time is: 10 PM: 30 : 38*/
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

let button = document.querySelector("#submit")
let reset = document.querySelector("button[type=reset]")

button.addEventListener("click", () => {
    let input_value = document.getElementById("number").value;
    let random_number = Math.round(Math.random() * 11)
        (input_value === random_number) ? alert("Good work!") : alert("Not matched")
})

reset.addEventListener("click", () => {
    document.getElementById("number").value = "";
})

//New date variable created solely for the purpose of an exercise number 3
//3. Write a JavaScript program to calculate days left until next Christmas.
let today = date.getTime();
let day_of_a_month = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let christmas;
(month === 12 && day_of_a_month > 24) ? christmas = new Date(`${year + 1}-12-24`) : christmas = new Date(`${year}-12-24`)

let christmas_time = christmas.getTime();
let seconds_left = today - christmas_time;
let seconds_to_days = 1000 * 60 * 60 * 24;
let days_left_to_christmas = Math.abs(Math.round(seconds_left / seconds_to_days))

console.log(`${days_left_to_christmas} days till Christmas`)

/* 4. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.Go to the editor
[Formula : c / 5 = (f - 32) / 9[where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output:
60°C is 140 °F
45°F is 7.222222222222222°C*/

const temperature_converter_button = document.getElementById("temperature-submit-button")

temperature_converter_button.addEventListener("click", () => {
    let celsius_input = document.getElementById("celsius").value;
    let fahrenheit_input = document.getElementById("fahrenheit").value

    let fahrenheit_output = ((9 * celsius_input) + (32 * 5)) / 5

    let celsius_output = (5 * (fahrenheit_input - 32)) / 9

    let paragraph_celsius = document.createElement("p");
    let paragraph_fahrenheit = document.createElement("p");

    let celsius_p = body.appendChild(paragraph_celsius);

    let fahrenheit_p = body.appendChild(paragraph_fahrenheit);

    celsius_p.textContent = `Your degrees of Celsius (${celsius_input} °C) are this much ${fahrenheit_output} °F in Fahrenheit`

    fahrenheit_p.textContent = `Your degrees of Fahrenheit (${fahrenheit_input} °F) are this much ${celsius_output} °C are in Celsius degrees`

})












