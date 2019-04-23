'use strict';
//--------------------Globals--------------------------//
var continueGame = function() {
  introText.textContent = 'You decided to manuever around the astroid field. This took alot more time than you imagined, but you are safe from it\'s onslaught and continued on in your journey.';
  CrewMemberChoice();
};
var endGame = function() {
  introText.textContent = 'You managed to dodge a few asteroids, but you couldn\'t dodge them all as your ship\'s damage became too much as it lost its functuanlity and you began to drift into space.';
  setTimeout(function(){ alert('GAME OVER'); }, 3000);
};
//--------------------Buttons--------------------------//
var insertStartButton = document.getElementById('startbutton');
var startButton = document.createElement('button');

var choice1 = document.createElement('BUTTON');
choice1.innerHTML = 'Go around the astroid belt';
choice1.addEventListener('click', continueGame);

var choice2 = document.createElement('BUTTON');
choice2.innerHTML = 'Go through the astroid belt';
choice2.addEventListener('click', endGame);

//--------------------Intro--------------------------//
var introText = document.getElementById('textinsert');
function introductionText() {
  introText.textContent = 'Pilot the world is in a dire situation. Over the past few years melting of the polar ice caps has accelerated. Florida and parts of Italy are completely under water. The world has banned together and found that is possible to establish ourselves on Mars. You have been elected to carry out the initial journey. Your resources will be limited for this journey. How you manage these resources will utlilmatly determine your success. The human race is counting on you in these trying times. Consider your choices carfeully to ensure the completion of your mission.';
  startButton.textContent = 'Start Adventure';
  insertStartButton.append(startButton);
}
var startGame = function(event) {
    event.preventDefault();
  };
  startGame = document.getElementById('startbutton');
  startGame.addEventListener('click', function handler(){
    choiceOne();
    this.removeEventListener('click', handler);
    insertStartButton.parentNode.removeChild(insertStartButton);
  });
  
//--------------------Choice 1--------------------------//
function choiceOne() {
  var textChoiceOne = document.getElementById('textinsert');
  textChoiceOne.textContent = 'You have successfully gotten to orbit. There is an astroid belt in front of you. What do you do?';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(choice1);
  choiceBoxes.appendChild(choice2);
}

//--------------------Choice 2--------------------------//
function CrewMemberChoice(){
  var crewMemberContinue = function() {
    introText.textContent = 'You decide to throw him in space good job!';
    //add next function in here to continue
  }
  var crewMemberEndgame = function() {
    introText.textContent = 'You and your crew ended up loving the taste of human flesh and you guys ate each other.';
    setTimeout(function(){ alert('GAME OVER'); });
  }

  choice1.innerHTML = 'Capture him and feed him to the crew';
  choice1.addEventListener('click', crewMemberEndgame);

  choice2.innerHTML = 'Throw him into space';
  choice2.addEventListener('click', crewMemberContinue);

  var textCrewMemberChoice = document.getElementById('textinsert');
  textCrewMemberChoice.textContent = 'A crew member goes crazy and starts eating people. How do you want to deal with that Space Moses';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(choice1);
  choiceBoxes.appendChild(choice2);

}



//--------------------Choice 3--------------------------//



//--------------------Choice 4--------------------------//




//--------------------Choice 5--------------------------//





//--------------------Functions Called--------------------------//

introductionText();


