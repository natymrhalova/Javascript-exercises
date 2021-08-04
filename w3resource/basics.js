/*Write a JavaScript program to display the current day and time in the following format.Go to the editor
Sample Output: Today is: Tuesday.
Current time is: 10 PM: 30 : 38*/

var date = new Date();
var day = date.getDay() - 1;
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var days_array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var appended_value = (hours >= 12) ? " PM" : " AM";
hours = (hours >= 12) ? hours - 12 : hours;

console.log(`Today is ${days_array[day]}`);
console.log(`Current time : ${hours} ${appended_value} : ${minutes} : ${seconds}`);