

var timeRemaining= 45;
var wrong= 0;
var right= 0;
var Interval;

$(document).ready(function() {

$("#start").on("click", function() {
    setInterval(countdown, 1000);
  

})

function countdown() {
    timeRemaining--;
    $("#timer").html("Remaining Time: " + timeRemaining + " seconds");

    if (timeRemaining === 0) {
        stop();
        document.location.reload();
    }

}



function stop() {
    clearInterval(timeRemaining);
    alert("Right Answers: " + right);
    alert("Wrong Answers: " + wrong);
  }

 
});


  



