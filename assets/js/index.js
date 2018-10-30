

var timeRemaining= 30;
var wrong= 0;
var right= 0;
var Interval;

$(document).ready(function() {
    $("#reset").hide();
    $("#reset").on("click", function() {
        document.location.reload();
    })

    $("#start").on("click", function() {
        Interval = setInterval(countdown, 1000);
    })
function countdown() {
    timeRemaining--;
    $("#timer").html("Remaining Time: " + timeRemaining + " seconds");

    if (timeRemaining === 0) {
        stop();
        gameOver();
        $("#reset").show();
    }
}



function stop() {
    clearInterval(Interval);
    $("#correct").html("Correct: " + right + " " + "Incorrect: " + wrong);
  }
function gameOver() {
        var Q1 = $('input:radio[name="1st"]:checked').val();
		var Q2 = $('input:radio[name="2nd"]:checked').val();
		var Q3 = $('input:radio[name="3rd"]:checked').val();
		var Q4 = $('input:radio[name="4th"]:checked').val();
		var Q5 = $('input:radio[name="5th"]:checked').val();
        var Q6 = $('input:radio[name="6th"]:checked').val();
function checkAnswers(questionName, answer){
      if(questionName === answer){
         right++;
      }
      else{
         wrong++;
      }
    }
        checkAnswers(Q1, "The Volstead Act");
        checkAnswers(Q2, "1919");
        checkAnswers(Q3, "Chicago");
        checkAnswers(Q4, "Arnold Rothstein");
        checkAnswers(Q5, "Scarface");
        checkAnswers(Q6, "1933");   
        stop();
};
//   $(document).ready(function(){
//     $("#Q1 input[type=radio]:checked").each(function() {
//         if(this.value == "The Volstead Act" && this.checked == true) {
//             right++;
//             console.log("hey");
//         }
//         else {wrong++;
//         }
//     });
//  });
//   function checkAll() {
//     function questioncheckOne(){
//     var correctAnswer = $("#a3")
//     if (correctAnswer.checked === true) {
//         right++;
//     }
//     else {
//         wrong++;
//     }
// };
//     function questioncheckTwo(){
//     var correctAnswer = $("#b4")
//     if (correctAnswer.checked === true) {
//         right++;
//     }
//     else {
//         wrong++;
//     }
// };
//     function questioncheckThree(){
//     var correctAnswer = $("#c2")
//     if (correctAnswer.checked === true) {
//         right++;
//     }
//     else {
//         wrong++;
//     }
// };
//     function questioncheckFour(){
//     var correctAnswer = $("#d1")
//     if (correctAnswer.checked === true) {
//         right++;
//     }
//     else {
//         wrong++;
//     }
// };
//     function questioncheckFive(){
//     var correctAnswer = $("#e4")
//     if (correctAnswer.checked === true) {
//         right++;
//     }
//     else {
//         wrong++;
//     }
// };
//     function questioncheckSix(){
//     var correctAnswer = $("#f4")
//     if (correctAnswer.checked === true) {
//         right++;
//     }
//     else {
//         wrong++;
//     }
// };
// //   };

//   function timesUp() {
//       if (timeRemaining === 0) {
//         questioncheckOne;
//         questioncheckTwo;
//         questioncheckThree;
//         questioncheckFour;
//         questioncheckFive;
//         questioncheckSix;
//       }
//   }
//   timesUp;

//     if ($('input[id=a3]:checked')) {
//     right++;
// }
// else {
//     wrong++;
// };




});


  



