var number = 31;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;

run(number);

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#show-number").html("<h4>Time Remaining: " + number + " seconds </h4>");
    if (number === 0) {
        stop();
        alert("Correct Answers: " + correctAnswers + " Incorrect answers: " + incorrectAnswers);
    }
}

function stop() {
    clearInterval(intervalId);
    checkAnswers(document.forms['Trivia']);
}

function checkAnswers(form) {
    console.log(form.q1answer.value);

    if (form.q1answer.value == 4) {
        correctAnswers++;
    }
    console.log(form.q2answer.value);

    if (form.q2answer.value == 2) {
        correctAnswers++;
    }

    console.log(form.q3answer.value);

    if (form.q3answer.value == 4) {
        correctAnswers++;
    }

    incorrectAnswers = 3 - correctAnswers;
}
