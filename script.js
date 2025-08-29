// Part 1: Variables, conditionals
let name = "Daniel";
let age = 20;

// Conditional logic
if (age >= 18) {
  console.log(`${name} is an adult.`);
} else {
  console.log(`${name} is a minor.`);
}

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format a greeting
function greetUser(username) {
  return `Hello, ${username}! Welcome to the page.`;
}

console.log(calculateTotal(10, 3)); // 30
console.log(greetUser("Daniel"));

// For loop: countdown
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

// While loop: print numbers
let num = 1;
while (num <= 3) {
  console.log("Number:", num);
  num++;
}

// forEach loop: iterate array
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));


// Select elements
let outputDiv = document.getElementById("output");
let toggleBtn = document.getElementById("toggleBtn");
let generateListBtn = document.getElementById("generateListBtn");

// DOM interaction 1: Change text
outputDiv.textContent = "Welcome!";

// DOM interaction 2: Toggle content on button click
toggleBtn.addEventListener("click", function() {
  if (outputDiv.textContent === "Welcome!") {
    outputDiv.textContent = "Text Toggled!";
  } else {
    outputDiv.textContent = "Welcome!";
  }
});

// DOM interaction 3: Generate list dynamically
generateListBtn.addEventListener("click", function() {
  let list = document.createElement("ul");
  ["HTML", "CSS", "JavaScript"].forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  outputDiv.innerHTML = ""; // clear previous content
  outputDiv.appendChild(list);
});
