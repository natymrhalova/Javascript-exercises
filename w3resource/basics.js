/*Write a JavaScript program to display the current day and time in the following format.Go to the editor
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

/*Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". */

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









