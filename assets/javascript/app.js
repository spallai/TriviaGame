var number = 30;

var intervalId;

function run() {
    intervalId = setInterval(decrement, 1000);
}

run(number);

function decrement() {
    number--;
    $("#show-number").html("Time left: " + number + " seconds");
    if (number === 0) {
        stop();
        alert("Time's up!");
    }
}

function stop () {
    clearInterval(intervalId);
}