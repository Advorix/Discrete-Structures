//Without this, nothing works
window.addEventListener("DOMContentLoaded", startProgram)


function startProgram() {
    //This sets up the buttons. Clicking a button calls the other main functions.
    document.getElementById("random").onclick = function() {reset(), randomRule()};
    //I know we only had to pick a rule at random, but I figured that this would help with
    //showing the outputs.
    document.getElementById("rule1").onclick = function() {reset(), rule1()};
    document.getElementById("rule2").onclick = function() {reset(), rule2()};
    document.getElementById("rule3").onclick = function() {reset(), rule3()};
    document.getElementById("rule4").onclick = function() {reset(), rule4()};
   
}

function checkAnswer(correctAnswer) {
    var answer = document.getElementById("answer-box").value;
    var correct = document.getElementById("correct");
    if (answer == correctAnswer) {
        correct.innerHTML = "Correct!";
        correct.style.color = "green";
        }
    else {
        correct.innerHTML = "Incorrect. Try Again."
        correct.style.color = "red";
        }
    }

function reset() {
    //This resets the Terms, answer value, and correct/incorrect area.
    document.getElementById("terms").innerHTML = "Terms: "
    document.getElementById("answer-box").value = ""
    document.getElementById("correct").innerHTML = ""
}
function randomRule() {
    var rule = Math.floor(Math.random() * 4 + 1);
    console.log("Rule " + rule)
    switch (rule) {
        case 1: rule1(); break;
        case 2: rule2(); break;
        case 3: rule3(); break;
        case 4: rule4(); break;
    }
}
function rule1() {
    //This one will be the simple addition- the arithmetic sequence. start + (n-1)*add
    var start = Math.floor(Math.random() * 10 + 1);
    var add = Math.floor(Math.random() * 7 + 1);
    for (let i = 0; i < 4; i++) {
        document.getElementById("terms").innerHTML+= (start + " ");
        start+= add;
    }
    var correctAnswer = start;
    console.log("Answer: " + correctAnswer)
    document.getElementById("check-answer").onclick = function() {checkAnswer(correctAnswer)}
}
function rule2() {
    //Simple multiplication, geometric sequence.   start * multiply^n-1
    var start = Math.floor(Math.random() * 10 + 1);
    var multiply = Math.floor(Math.random() * 5 + 2); //don't want 0 or 1 since it would be boring
    for (let i = 0; i < 4; i++) {
        document.getElementById("terms").innerHTML+= (start + " ");
        start*= multiply;
    }
    var correctAnswer = start;
    console.log("Answer: " + correctAnswer)
    document.getElementById("check-answer").onclick = function() {checkAnswer(correctAnswer)}
}
function rule3() {
    //Recurrence sequence based on 9a from homework a0 = start, multiply*start - num1
    var start = Math.floor(Math.random() * 10 + 1);
    var multiply = Math.floor(Math.random() * 5 + 1);
    var num1 = Math.floor(Math.random() * 10 + 1);
    //Has the potential to give a negative number. 
    for (let i = 0; i < 4; i++) {
        document.getElementById("terms").innerHTML+= (start + " ");
        start = start * multiply - num1;
    }
    var correctAnswer = start;
    console.log("Answer: " + correctAnswer)
    document.getElementById("check-answer").onclick = function() {checkAnswer(correctAnswer)}
}
function rule4() {
    //Recurrence sequence based on 9c from homework  
    //a0 = first, a1 = second  multiply*first + second
    var first = Math.floor(Math.random() * 5 + 1);
    var second = Math.floor(Math.random() * 5 + 1);
    var multiply = Math.floor(Math.random() * 5 + 1);
    document.getElementById("terms").innerHTML+= (first + " ");
    for (let i = 0; i < 3; i++) {
        document.getElementById("terms").innerHTML+= (second + " ");
        let temp = second;
        second = multiply * first + second;
        first = temp;
    }
    var correctAnswer = second;
    console.log("Answer: " + correctAnswer)
    document.getElementById("check-answer").onclick = function() {checkAnswer(correctAnswer)}
}
