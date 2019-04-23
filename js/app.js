'use strict';

// var fromvalidator = new validator('userform');
//     fromvalidator.addValidation('UserName', 'req', 'Please enter your User Name');
//     fromvalidator.addValidation('UserName', 'maxlen=15', 'Max length for UserName is 15');


var introText = document.getElementById('textinsert');
var textDisplay;
var continueGame = function() {
    introText.textContent = "You decided to manuever around the astroid field. This took alot more time than you imagined, but you are safe from it's onslaught and continued on in your journey."
}
var endGame = function() {
introText.textContent = "You managed to dodge a few asteroids, but you couldn't dodge them all as your ship's damage became too much as it lost its functuanlity and you began to drift into space."
setTimeout(function(){ alert("GAME OVER"); }, 3000);
}

var insertStartButton = document.getElementById('startbutton');
  var startButton = document.createElement('button');


  var choice1 = document.createElement('BUTTON');
  choice1.innerHTML = "Go around the astroid belt";
  choice1.addEventListener('click', continueGame);

  var choice2 = document.createElement('BUTTON');
  choice2.innerHTML = "Go through the astroid belt";
  choice2.addEventListener('click', endGame);
var inputAnswers = [];

//----------------------------------------------//
function introductionText() {

  introText.textContent = 'Pilot the world is in a dire situation. Over the past few years melting of the polar ice caps has accelerated. Florida and parts of Italy are completely user the high sea levels. The world has banned together and found that is possible to establish ourselves on Mars. You have been elected to carry out the initial journey. Your resources will be limited for this journey. How you manage these resources will utlilmatly determine your success as well as the survival of the human race.';

  startButton.textContent = 'Start Adventure';
  insertStartButton.append(startButton);
}

function choiceOne() {
  var textChoiceOne = document.getElementById('textinsert');

  textChoiceOne.textContent = 'You have successfully gotten to orbit. There is an astroid belt in front of you. What do you do?';
  var choiceBoxes = document.getElementById('radioChoice')
choiceBoxes.appendChild(choice1);
choiceBoxes.appendChild(choice2);

var choiceOneMade = function(event) {
  event.preventDefault();
  var choiceOneCorrect = document.getElementById('textinsert');
  if (inputAnswers === 'go around' || inputAnswers ==='go around astroid belt'){
    choiceOneCorrect.textContent = 'You continue around the belt saving your ship from being damaged';
  } else {
    var choiceOneIncorrect = document.getElementById('textinsert');
    choiceOneIncorrect.textContent = 'Your ship has been damaged by space particle';
  }
};

// choicemade.addEventListener('click', choiceOneMade);

introductionText();
// choiceOne();

var startGame = function(event) {
  event.preventDefault();
};
startGame = document.getElementById('startbutton');

startGame.addEventListener('click', function handler(){
    choiceOne();
    this.removeEventListener('click', handler);
    insertStartButton.parentNode.removeChild(insertStartButton);
});
