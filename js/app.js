'use strict';
//--------------------Globals--------------------------//

// var continueGame = function() {
//   introText.textContent = 'You decided to manuever around the astroid field. This took alot more time than you imagined, but you are safe from it\'s onslaught and continued on in your journey.';
//   CrewMemberChoice();
// };
// var endGame = function() {
//   introText.textContent = 'You managed to dodge a few asteroids, but you couldn\'t dodge them all as your ship\'s damage became too much as it lost its functuanlity and you began to drift into space.';
//   setTimeout(function(){ alert('GAME OVER'); }, 3000);
// };
//--------------------Buttons--------------------------//

var continueGame = function() {
  introText.textContent = 'You decided to manuever around the astroid field. This took alot more time than you imagined, but you are safe from it\'s onslaught and continued on in your journey.';
  crewMemberChoice();
};
var endGame = function() {
  introText.textContent = 'You managed to dodge a few asteroids, but you couldn\'t dodge them all as your ship\'s damage became too much as it lost its functuanlity and you began to drift into space.';
  setTimeout(function(){ alert('GAME OVER'); }, 3000);
};
//--------------------UserName--------------------------//
function getUserName() {
    var userName = document.getElementById('userName').value;
    var result = document.getElementById('result');
   
    if (userName.length > 15) {
      result.textContent = 'Username must contain less than 15 characters';
      //alert('Username must contain at least 15 characters');
    } else {
      result.textContent = 'Captian ' + userName;
      alert('Welcome, Captain ' + userName);
      console.log(userName);
    }
    introductionText();
   }
   var subButton = document.getElementById('subButton');
   subButton.addEventListener('click', getUserName, false);
//---------------Buttons--------------------------//
var insertStartButton = document.getElementById('startbutton');
var startButton = document.createElement('button');

var choice1 = document.createElement('BUTTON');
choice1.setAttribute('class', 'leftButton');
// choice1.innerHTML = 'Go around the astroid belt';
// choice1.addEventListener('click', continueGame);

var choice2 = document.createElement('BUTTON');
choice2.setAttribute('class', 'rightButton');
// choice2.innerHTML = 'Go through the astroid belt';
// choice2.addEventListener('click', endGame);

//--------------------Intro--------------------------//
var introText = document.getElementById('textinsert');
function introductionText() {
  introText.textContent = `${result.textContent} the world is in a dire situation. Over the past few years melting of the polar ice caps has accelerated. Florida and parts of Italy are completely under water. The world has banned together and found that is possible to establish ourselves on Mars. You have been elected to carry out the initial journey. Your resources will be limited for this journey. How you manage these resources will utlilmatly determine your success. The human race is counting on you in these trying times. Consider your choices carfeully to ensure the completion of your mission.`;
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
  var continueGame = function() {
    introText.textContent = 'You decided to manuever around the astroid field. This took alot more time than you imagined, but you are safe from it\'s onslaught and continued on in your journey.';
    CrewMemberChoice();
  };
  var endGame = function() {
    introText.textContent = 'You managed to dodge a few asteroids, but you couldn\'t dodge them all as your ship\'s damage became too much as it lost its functuanlity and you began to drift into space.';
    setTimeout(function(){ alert('GAME OVER'); }, 3000);
  };

  choice1.innerHTML = 'Go around the astroid belt';
  choice1.addEventListener('click', continueGame);

  choice2.innerHTML = 'Go through the astroid belt';
  choice2.addEventListener('click', endGame);

  var textChoiceOne = document.getElementById('textinsert');
  textChoiceOne.textContent = 'You have successfully gotten to orbit. There is an astroid belt in front of you. What do you do?';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(choice1);
  choiceBoxes.appendChild(choice2);
}

//--------------------Choice 2--------------------------//
function crewMemberChoice(){
  var crewMemberContinue = function() {
    introText.textContent = 'You decide to throw him in space good job!';
    alienChoice();
  };
  var crewMemberEndgame = function() {
    introText.textContent = 'You and your crew ended up loving the taste of human flesh and you guys ate each other.';

    setTimeout(function(){ alert('GAME OVER');}, 3000);
  }
  choice2.setAttribute('class', 'leftButton');
  choice2.innerHTML = 'Capture him and feed him to the crew';
  choice2.addEventListener('click', crewMemberEndgame);

  
  choice1.setAttribute('class', 'rightButton');
  choice1.innerHTML = 'Throw him into space';
  choice1.addEventListener('click', crewMemberContinue);

    setTimeout(function(){ alert('GAME OVER'); });
  };

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
function alienChoice(){
  var alienContinue = function(){
    introText.textContent = 'You have taken a great risk by welcoming aliens on board! Your arrogance has paid off, this time, Captain. The aliens from Planet Druidia have gifted you with resources and have granted you permission to continue in peace. Well done!';
    // choice 4 function call here
  };
  function alienEndGame(){
    introText.textContent = 'You think you can compete against the great warriors of Planet Druidia? You have been destroyed for your ignorance!';
    setTimeout(function(){ alert('GAME OVER'); });
  }

  choice1.innerHTML = 'Welcome the aliens on board in hopes to gain allies.';
  choice1.addEventListener('click', alienContinue);
  choice2.innerHTML = 'These aliens are a threat! Engage in battle!';
  choice2.addEventListener('click', alienEndGame);

  var textAlienChoice = document.getElementById('textinsert');
  textAlienChoice.textContent = 'You continue on your journey, weary of what other tribulations lie ahead. Just as you and your crew begin to grow comfortable, you hear a voice coming through your transmitter. \'Hello\', it says, \'This is King Roland of the great planet Druidia. Let us on board and our species can exchange knowledge!\' What do you do?';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(choice1);
  choiceBoxes.appendChild(choice2);
}
//--------------------Choice 4--------------------------//




//--------------------Choice 5--------------------------//





//--------------------Functions Called--------------------------//



