console.log("Game On!");
// need to pull the html elements in if I want to use them in javaScript, see below for an example
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var button = document.getElementById("start")

console.log('your timerEl variable looks like', timerEl);
timerEl.textContent = "This is your timer element in HTML";
timerEl.style.backgroundColor = "aquamarine";
// variables can be different types of data, i.e. number, function, Symbol, string, boolean, object, null, undefined, BigInt
// furthermore, the data type can be primitive, or it can be an object.

var message = ' May the force be with you!';
var words = message.split(' ');

for(let i = 0; i < 10; i++) {
//   console.log('i is', i);
}
// console.log('after loop, i is', i);

//attempting to grab alternative Attributes
//consider putting all questions into an array, i.e. a list like []
let question = {
  title:"What is the capital of California?",
  alternatives: ["San Fransisco", "San Diego", "Sacramento", "Las Vegas"],
  correctAnswer : 2
};

let question1 = {
title:"Which planet is the closest to the sun?",
alternatives:["Mercury", "Venus", "Earth", "Mars"],
 correctAnswer: 0

 // fix above problem
 };

let question2 = {
  title:"What mountain is tallest from base to peak?",
  alternatives:["Mount Fuji", "Mauna Kea", "Mount wannahockaloogie", "Mount Everest"],
  correctAnswer: 1
};

let question3 = {
  title:"What is the sum of the first 10 prime numbers?",
  alternatives:["10", "169", "144", "129"],
  correctAnswer: 3
};

let question4 = {
  title:"What year did joust come out?",
  alternatives:["1982", "1984", "1986", "1979"],
  correctAnswer: 0
};



function showQuestion (q) {
  let titleDiv = document.getElementById("title")
  titleDiv.textContent=q.title;
  let alts=document.querySelectorAll(".alternative");
  // alts.forEach(function)(element, index){
  //   element.textContent=qalternatives[index];
  //     });
}


showQuestion(question);

// creating a questions array
var questions = [
  // making an arrray of objects
  {
    title: "What is the capital of California?",
    // putting choices in an array so that we can loop through them with a forLoop
    choices: ["San Francisco", "San Diego", "Sacramento", "Las Vegas"],
    answer: "Sacramento",
  },
  {
    title: "Which planet is the closest to the sun?",
    // putting choices in an array so that we can loop through them with a forLoop
    choices: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury",
  },
  {
    title: "What mountain is tallest from base to peak?",
    // putting choices in an array so that we can loop through them with a forLoop
    choices: ["Mount Fuji", "Mauna Kea", "Mount wannahockaloogie", "Mount Everest"],
    answer: "Mauna Kea",
  },
  {
    title: "What is the sum of the first 10 prime numbers",
    // putting choices in an array so that we can loop through them with a forLoop
    choices: ["10", "169", "144", "129"],
    answer: "129",
  },
  {
    title: "What year did joust come out?",
    // putting choices in an array so that we can loop through them with a forLoop
    choices: ["1982", "1984", "1986", "1979"],
    answer: "1982",
  },
]
//new function for questions
function startgame(){
//need to add event listeners to all of the questions
//need if elses 
}

function countdown() {
  var secondsLeft = 10;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Almost time to play.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image

    }

  }, 1000);
};


// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}
displayMessage();
countdown();




//Function to button
function modifyText() {
  console.log('modifyText ran');
  isNodeThree = t1.firstChild.nodeValue === "three";
  t1.firstChild.nodeValue = isNodeThree ? "two" : "three";
}

//var button = document.getElementById("start")
// need to add an event listener to the start button


button.addEventListener("click", modifyText);