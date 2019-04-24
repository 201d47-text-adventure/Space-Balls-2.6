'use strict';
//--------------------UserName--------------------------//
function getUserName() {
  var userName = document.getElementById('userName').value;
  var result = document.getElementById('result');

  if (userName.length > 15) {
    result.textContent = 'Username must contain less than 15 characters';
  } else {
    result.textContent = 'Captian ' + userName;
    alert('Welcome, Captain ' + userName);
  }
  introductionText();
}
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false);
//---------------Buttons--------------------------//
var insertStartButton = document.getElementById('startbutton');
var startButton = document.createElement('button');

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
  this.removeEventListener('click', handler);
  insertStartButton.parentNode.removeChild(insertStartButton);
  astroidChoice();
});

//--------------------Choice 1--------------------------//
var astroidChoice = function() {
  var astroidContinueGame = function() {
    introText.textContent = 'You decided to manuever around the astroid field. This took alot more time than you imagined, but you are safe from it\'s onslaught and continued on in your journey.';
    setTimeout(function(){crewMemberChoice();}, 5000);

  };
  var astroidEndGame = function() {
    introText.textContent = 'You managed to dodge a few asteroids, but you couldn\'t dodge them all as your ship\'s damage became too much as it lost its functuanlity and you began to drift into space.';
    setTimeout(function(){ alert('GAME OVER'); }, 3000);
  };
  var astroidChoiceContinue = document.createElement('BUTTON');
  astroidChoiceContinue.setAttribute('class', 'leftButton');
  astroidChoiceContinue.textContent = 'Go around astroid belt';
  astroidChoiceContinue.addEventListener('click', astroidContinueGame);

  var astroidChoiceEnd = document.createElement('BUTTON');
  astroidChoiceEnd.setAttribute('class', 'rightButton');
  astroidChoiceEnd.textContent = 'Go through astroid belt';
  astroidChoiceEnd.addEventListener('click', astroidEndGame);

  var textChoiceOne = document.getElementById('textinsert');
  textChoiceOne.textContent = 'You have successfully gotten to orbit. There is an astroid belt in front of you. What do you do?';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(astroidChoiceContinue);
  choiceBoxes.appendChild(astroidChoiceEnd);

  astroidChoiceContinue.addEventListener('click', function handler(){
    this.removeEventListener('click', handler);
    astroidChoiceContinue.parentNode.removeChild(astroidChoiceContinue);
    astroidChoiceEnd.parentNode.removeChild(astroidChoiceEnd);
  });
};


//--------------------Choice 2--------------------------//
function crewMemberChoice(){
  var crewMemberContinueGame = function() {
    introText.textContent = 'You decide to throw him in space good job!';
    setTimeout(function(){alienChoice();}, 5000);
  };
  var crewMemberEndGame = function() {
    introText.textContent = 'You and your crew ended up loving the taste of human flesh and you guys ate each other.';

    setTimeout(function(){ alert('GAME OVER');}, 3000);
  };

  var crewMemberContinue = document.createElement('BUTTON');
  crewMemberContinue.setAttribute('class', 'leftButton');
  crewMemberContinue.innerHTML = 'Throw him into space';
  crewMemberContinue.addEventListener('click', crewMemberContinueGame);

  var crewMemberEnd = document.createElement('BUTTON');
  crewMemberEnd.setAttribute('class', 'rightButton');
  crewMemberEnd.innerHTML = 'Capture him and feed him to the crew';
  crewMemberEnd.addEventListener('click', crewMemberEndGame);

  var textCrewMemberChoice = document.getElementById('textinsert');
  textCrewMemberChoice.textContent = 'A crew member goes crazy and starts eating people. How do you want to deal with that Space Moses';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(crewMemberContinue);
  choiceBoxes.appendChild(crewMemberEnd);

  crewMemberContinue.addEventListener('click', function handler(){
    this.removeEventListener('click', handler);
    crewMemberContinue.parentNode.removeChild(crewMemberContinue);
    crewMemberEnd.parentNode.removeChild(crewMemberEnd);
  });
}

// //--------------------Choice 3--------------------------//
function alienChoice(){
  var alienContinueGame = function(){
    introText.textContent = `You have taken a great risk by welcoming aliens on board! Your arrogance has paid off, this time, ${result.textContent}. The aliens from Planet Druidia have gifted you with resources and have granted you permission to continue in peace. Well done!`;
    setTimeout(function(){mogChoice();}, 5000);
  };
  var alienEndGame = function(){
    introText.textContent = 'You think you can compete against the great warriors of Planet Druidia? You have been destroyed for your ignorance!';

    setTimeout(function(){ alert('GAME OVER');}, 3000);
  };

  var alienEnd = document.createElement('BUTTON');
  alienEnd.setAttribute('class', 'leftButton');
  alienEnd.innerHTML = 'These aliens are a threat! Engage in battle!';
  alienEnd.addEventListener('click', alienEndGame);

  var alienContinue = document.createElement('BUTTON');
  alienContinue.setAttribute('class', 'rightButton');
  alienContinue.innerHTML = 'Welcome the aliens on board in hopes to gain allies.';
  alienContinue.addEventListener('click', alienContinueGame);

  var textAlienChoice = document.getElementById('textinsert');
  textAlienChoice.textContent = 'You continue on your journey, weary of what other tribulations lie ahead. Just as you and your crew begin to grow comfortable, you hear a voice coming through your transmitter. \'Hello\', it says, \'This is King Roland of the great planet Druidia. Let us on board and our species can exchange knowledge!\' What do you do?';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(alienContinue);
  choiceBoxes.appendChild(alienEnd);

  alienContinue.addEventListener('click', function handler(){
    this.removeEventListener('click', handler);
    alienContinue.parentNode.removeChild(alienContinue);
    alienEnd.parentNode.removeChild(alienEnd);
  });

}
//--------------------Choice 4--------------------------//
function mogChoice(){
  var mogContinueGame = function(){
    introText.textContent = 'Mission accomplished! We have made some loyal friends!';


  };
  var mogEndGame = function(){
    introText.textContent = 'Oh no! We miscalculated! System f...tzz...tzz......';

    setTimeout(function(){ alert('GAME OVER');}, 3000);
};

  var mogEnd = document.createElement('BUTTON');
  mogEnd.setAttribute('class', 'leftButton');
  mogEnd.innerHTML = 'Blast em!';
  mogEnd.addEventListener('click', mogEndGame);

  var mogContinue = document.createElement('BUTTON');
  mogContinue.setAttribute('class', 'rightButton');
  mogContinue.textContent = 'Try and befriend the Mogs.';
  mogContinue.addEventListener('click', mogContinueGame);

  var mogChoiceOne = document.getElementById('textinsert');
  mogChoiceOne.textContent = 'After gaining knowledge of the universe and aliens, you and your crew gained some confidence for the journey but are cursed with knowledge! We now approach the silly Mog pack! We are presented with a tough decision...';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(mogContinue);
  choiceBoxes.appendChild(mogEnd);

  mogContinue.addEventListener('click', function handler(){
    this.removeEventListener('click', handler);
    mogContinue.parentNode.removeChild(mogContinue);
    mogEnd.parentNode.removeChild(mogEnd);
  });

}



//--------------------Choice 5--------------------------//





//--------------------Functions Called--------------------------//



