'use strict';
var nameForm = document.getElementById('nameForm');


var removeUserForm = function () {
  nameForm.parentNode.removeChild(nameForm);
};
//---------------------GameOverFunction--------------------------------//
var gameOver = function () {
  var insertGameOverButton = document.getElementById('gameOverButton');
  var gameOverButton = document.createElement('BUTTON');
  gameOverButton.setAttribute('class', 'gameOverButton');
  gameOverButton.textContent = 'Continue?';
  insertGameOverButton.appendChild(gameOverButton);
  gameOverButton.addEventListener('click', function handler() {
    location.href = 'gameOver.html';
    var showResults = document.getElementById('resultsButton');
    showResults.addEventListener('click', gameOverDisplay);
    this.removeEventListener('click', handler);

  });
};

function gameOverDisplay(){
  var storageName = 'Captain ' + JSON.parse(localStorage.getItem('User'));
  var userChoices = JSON.parse(localStorage.getItem('userChoices', userChoices));

  var conclusions = {
    'astroidMoveThrough': 'You faced an onslaught of asteroids and survived by choosing to go through them',
    'astroidMoveAround': 'You faced an onslaught of asteroids and survived by choosing to go around them',
    'crewThrowInSpace': 'When faced with a sick crewmember you were forced to make a difficult choice. The utilitarian that you are, you decide to throw the sick crew member off of the ship to spare the rest of the crew the chance of illness.',
    'crewEatingEachOther': 'When faced with a sick crewmember you were forced to make a difficult choice. The utilitarian that you are, you opted to use the imminent death of one to increase your resources and feed the pack! Unfortunately for you and your crew, space food couldnt compete with the savory taste of flesh and you all died eating each other.',
    'alienWelcomeThem': 'When confronted with Alien life you had to act fast! Go to war or put your crew at risk by welcoming strange aliens onto your ship. Ultimately, you chose to welcome them with open arms!',
    'alienFightThem': 'When confronted with Alien life you had to act fast! Go to war or put your crew at risk by welcoming strange aliens onto your ship. Ultimately, you chose to fight them!',
    'mogBeFriendThem': 'When confronted with the Mogs, who are known for mischief, you decide to avoid conflict and allow them onboard. This choice pays off and you gain a true friend in Barf.',
    'mogGameOver': `Those Mogs are always causing trouble!  Too bad this time it cost you your life, ${storageName}! Better luck next time.`,
    'finalStageWormhole': 'You have faced many tough descisions and landed mars now you have to.....wait, what\'s going on?',
    'AlienAlternateGood': 'you learned from you mistakes, apologized to the king and continued your journey towards mars.',
    'alienAlternatePissedOffRoland': `You really did it now didn't you ${storageName}? Though your only potential allies at the time hated you, you managed to keep your life for the time being. `,
    'goingInAstroidShootExogorth': ' You got passed the Exogorth by shooting it.',
    'goingInAstroidEatenByExogorth': 'You were eaten by the Exo-whateverbigthing.',
    'exogorthAstroidPoopedOut': 'You survied the situation by waiting to be pooped uout! Your crew was not too happy with this decision.',
    'exogorthAstroidShootAt': 'You survived the situation by blasting a hole through the exogorth! unlucky for you though, this was King Roland\'s favorite pet!',
    'druidiaChoiceWinPrincess': ' You showed kindness to the princess and contined your journey towards mars.',
    'druidiaChoiceThrowPrincess': `You decided to kill the Kings Daughter after he enslaved you and brought you to your deserved death! (Why would you do this ${storageName}?! You monster!)`
  };

  var gameOverTextDiv = document.getElementById('gameOverTextDiv');
  for( var i = 0; i < userChoices.length; i++ ) {
    var gameOverText = document.createElement('li');
    gameOverText.textContent = conclusions[userChoices[i]];
    gameOverText.classList.add('gameOverText');
    gameOverTextDiv.append(gameOverText);
  }
}

//--------------------UserName--------------------------//
function getUserName() {
  var userName = document.getElementById('userName').value;
  var result = document.getElementById('result');

  if (userName.length > 15) {
    alert('User name must be less than 15 characters');
  } else {
    result.textContent = 'Captain ' + userName;
    localStorage.setItem('User', JSON.stringify(userName));
    introductionText();
    event.preventDefault();
    removeUserForm();
  }
}
var submitForm = document.getElementById('nameForm');
submitForm.addEventListener('submit', getUserName, false);
//--------------Globals--------------------------//
var insertStartButton = document.getElementById('startbutton');
var startButton = document.createElement('button');
var jParse = JSON.parse;
var userChoices = [];
var currentLocation = '';
var insertContinueButton = document.getElementById('continueButton');
var continueButton = document.createElement('button');

//---------------LocalStorage----------------------------//
var loadData = function () {
  var location = localStorage.getItem('currentLocation');


  switch (location) {
  case 'astroidStage':
    AstroidChoice();
    break;
  case 'crewMemberStage':
    crewMemberChoice();
    break;
  case 'alienStage':
    alienChoice();
    break;
  case 'astroidAlternateStage':
    goingInAstroid();
    break;
  case 'exogorthAstroidStage':
    exogorthAstroid();
    break;
  case 'alienAlternateStage':
    alienAlternateChoice();
    break;
  case 'mogStage':
    mogChoice();
    break;
  case 'druidiaStage':
    druidiaChoice();
    break;
  case 'finalStage':
    finalChoice();
    break;
  }
};

//--------------------Intro--------------------------//
var introText = document.getElementById('textinsert');
function introductionText() {
  introText.textContent = `${result.textContent} the world is in a dire situation. Over the past few years melting of the polar ice caps has accelerated. Florida and parts of Italy are completely under water. The world has banned together and found it possible to establish ourselves on Mars. You have been elected to carry out the initial journey. Your resources will be limited. The human race is counting on you in these trying times. Consider your choices carefully to ensure the completion of your mission.`;
  startButton.textContent = 'Start Adventure';
  insertStartButton.append(startButton);
}
var startGame = function (event) {
  event.preventDefault();
};
startGame = document.getElementById('startbutton');

startGame.addEventListener('click', function handler() {
  this.removeEventListener('click', handler);
  insertStartButton.parentNode.removeChild(insertStartButton);
  setupStory();
});

var setupText = document.getElementById('textinsert');
function setupStory() {
  setupText.textContent = `${result.textContent} the world is greatful for your acceptance of this dangerous misson. Time is of the essance and your ship is already prepared. Your mission to Mars awaits with all of its challenges and experiences. Keep in mind your choices will determine the fate of the world. Good luck ${result.textContent}`;
  continueButton = document.createElement('BUTTON');
  continueButton.setAttribute('class', 'continueButton');
  continueButton.textContent = 'Continue';
  var bottomButton = document.getElementById('continueButton');
  bottomButton.appendChild(continueButton);
  continueButton.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    continueButton.parentNode.removeChild(continueButton);
    astroidChoice();
  });
}

//--------------------Choice 1--------------------------//
var astroidChoice = function () {
  currentLocation = 'astroidStage';
  localStorage.setItem('currentLocation', currentLocation);
  var astroidContinueGame = function () {
    introText.textContent = 'You decided to manuever around the astroid field. This took alot more time than you imagined, but you are safe from it\'s onslaught and continued on in your journey.';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('astroidMoveAround');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      crewMemberChoice();
    });
  };
  var astroidEndGame = function () {
    introText.textContent = `You managed to dodge a few asteroids, but you couldn't dodge them all and your ship has lost functionality in one of its engines, disabling your ship's ability to make right hand turns. All lefts from here on out, ${result.textContent} `;
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('astroidMoveThrough');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      goingInAstroid();
    });
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

  astroidChoiceContinue.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    astroidChoiceContinue.parentNode.removeChild(astroidChoiceContinue);
    astroidChoiceEnd.parentNode.removeChild(astroidChoiceEnd);
  });
  astroidChoiceEnd.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    astroidChoiceContinue.parentNode.removeChild(astroidChoiceContinue);
    astroidChoiceEnd.parentNode.removeChild(astroidChoiceEnd);
  });
};

//--------------------Choice 2--------------------------//
var disableCrewEnd = false;
var crewMemberChoice = function () {
  currentLocation = 'crewMemberStage';
  localStorage.setItem('currentLocation', currentLocation);
  var crewMemberContinueGame = function () {
    if (!disableCrewEnd) {
      introText.textContent = 'You decide to throw him into space....... good job! That Space Moses got what he deserved. But it does make you wonder if he was onto something.......';
      continueButton = document.createElement('BUTTON');
      continueButton.setAttribute('class', 'continueButton');
      continueButton.textContent = 'Continue';
      var bottomButton = document.getElementById('continueButton');
      bottomButton.appendChild(continueButton);
      continueButton.addEventListener('click', function handler() {
        this.removeEventListener('click', handler);
        continueButton.parentNode.removeChild(continueButton);
        userChoices.push('crewThrowInSpace');
        localStorage.setItem('userChoices', JSON.stringify(userChoices));
        alienChoice();
      });
    }
  };
  var crewMemberEndGame = function () {
    introText.textContent = 'You and your crew ended up loving the taste of human flesh and you guys ate each other.';
    if (!disableCrewEnd) {
      disableCrewEnd = true;
      crewMemberContinue.style.backgroundColor = '#616161';
      userChoices.push('crewEatingEachOther');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      gameOver();
    }
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

  crewMemberContinue.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    crewMemberContinue.parentNode.removeChild(crewMemberContinue);
    crewMemberEnd.parentNode.removeChild(crewMemberEnd);
  });
  crewMemberEnd.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    crewMemberContinue.parentNode.removeChild(crewMemberContinue);
    crewMemberEnd.parentNode.removeChild(crewMemberEnd);
  });
};
// //--------------------Choice 3--------------------------//
function alienChoice() {
  currentLocation = 'alienStage';
  localStorage.setItem('currentLocation', currentLocation);
  var storageName = 'Captain ' + jParse(localStorage.getItem('User'));
  var alienContinueGame = function () {
    introText.textContent = `You have taken a great risk by welcoming aliens on board! Your arrogance has paid off, this time, ${storageName}. The aliens from Planet Druidia have gifted you with resources and have granted you permission to continue in peace. Well done!`;
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('alienWelcomeThem');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      mogChoice();
    });
  };
  var alienEndGame = function () {
    introText.textContent = 'You think you can compete against the great warriors of Planet Druidia? We shall see!';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('alienFightThem');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      alienAlternateChoice();
    });
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

  alienContinue.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    alienContinue.parentNode.removeChild(alienContinue);
    alienEnd.parentNode.removeChild(alienEnd);
  });
  alienEnd.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    alienContinue.parentNode.removeChild(alienContinue);
    alienEnd.parentNode.removeChild(alienEnd);
  });
}
//--------------------Choice 4--------------------------//
var mogChoice = function () {
  currentLocation = 'mogStage';
  localStorage.setItem('currentLocation', currentLocation);
  var mogContinueGame = function () {
    introText.textContent = 'Mission accomplished! We have made some loyal friends!';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('mogBeFriendThem');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      finalChoice();
    });
  };
  var mogEndGame = function () {
    userChoices.push('mogGameOver');
    localStorage.setItem('userChoices', JSON.stringify(userChoices));
    introText.textContent = 'Oh no! We miscalculated! System f...tzz...tzz......';
    gameOver();
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

  mogContinue.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    mogContinue.parentNode.removeChild(mogContinue);
    mogEnd.parentNode.removeChild(mogEnd);
  });

  mogEnd.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    mogContinue.parentNode.removeChild(mogContinue);
    mogEnd.parentNode.removeChild(mogEnd);
  });
};

//--------------------Choice 5--------------------------//
var finalChoice = function () {
  currentLocation = 'finalStage';
  localStorage.setItem('currentLocation', currentLocation);
  function background() {
    event.preventDefault();
    var referenceimage = document.getElementById('body');
    referenceimage.setAttribute('class', 'mars');
  }
  function onMarsLanding() {
    event.preventDefault();
    var referencebackground = document.getElementById('sliding');
    referencebackground.removeAttribute('class');
  }
  var victory = function () {
    introText.textContent = 'You have made it to Mars';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      gameOver();
    });
    background();
    onMarsLanding();
    userchoices = [];
    currentLocation = '';
    localStorage.removeItem('userChoices');
    localStorage.removeItem('currentLocation');
  };
  var failure = function () {
    introText.textContent = 'Oh no! Why would you trust Barf to steer the ship?';

    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('finalStageWormhole');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      wormHole();
    });
  };
  var wormHole = function () {
    introText.textContent = 'As Barf steered toward the surface of Mars his attention suddenly snaps to an anomly in the distance. He jerks the ship toward it and accelerates. IT IS A WORM HOLE!?!?!?! You wrestle with him for control but it is too late the gravatational pull sucks the ship in. Everything goes black then.......';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      astroidChoice();
    });
  };

  var finalEnd = document.createElement('BUTTON');
  finalEnd.setAttribute('class', 'leftButton');
  finalEnd.innerHTML = 'Give him the controls!';
  finalEnd.addEventListener('click', failure);

  var noBarf = document.createElement('BUTTON');
  noBarf.setAttribute('class', 'rightButton');
  noBarf.textContent = 'Mogs should never be in control ESPECIALLY Barf!';
  noBarf.addEventListener('click', victory);

  var barfsQuestion = document.getElementById('textinsert');
  barfsQuestion.textContent = 'After becoming friends forever the Mog leader Barf asks to take control of the ship for the remainder of the journey';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(noBarf);
  choiceBoxes.appendChild(finalEnd);

  noBarf.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    noBarf.parentNode.removeChild(noBarf);
    finalEnd.parentNode.removeChild(finalEnd);
  });

  finalEnd.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    noBarf.parentNode.removeChild(noBarf);
    finalEnd.parentNode.removeChild(finalEnd);
  });
};

// ----------------------Alternative AlienChoice------------------------
function alienAlternateChoice() {
  currentLocation = 'alienAlternateStage';
  localStorage.setItem('currentLocation', currentLocation);
  var alienAlternateContinueGame = function () {
    introText.textContent = `King Roland is a reasonable leader, ${result.textContent}. He is contented in feeling as though you have learned your place as the lesser species. He takes his people and leaves your ship, allowing you to continue on your journey but he took half of your food with him as a price for your insolence.`;
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('AlienAlternateGood');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      mogChoice();
    });
  };
  var alienAlternateEndGame = function () {
    introText.textContent = 'All Druidia wanted was friendship but you are too foolish for that! You will never be able to beat the great Duidia!';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      userChoices.push('alienAlternatePissedOffRoland');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      druidiaChoice();
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
    });
  };

  var alienAlternateEnd = document.createElement('BUTTON');
  alienAlternateEnd.setAttribute('class', 'leftButton');
  alienAlternateEnd.innerHTML = 'Fight through your dying breath!';
  alienAlternateEnd.addEventListener('click', alienAlternateEndGame);

  var alienAlternateContinue = document.createElement('BUTTON');
  alienAlternateContinue.setAttribute('class', 'rightButton');
  alienAlternateContinue.innerHTML = 'Apologize and beg for mercy.';
  alienAlternateContinue.addEventListener('click', alienAlternateContinueGame);

  var textAlienAlternateChoice = document.getElementById('textinsert');
  textAlienAlternateChoice.textContent = 'You engage in battle with the warriors of Planet Druidia! You were poorly equipped and lacked the knowledge to have such a battle, but you make up for in grit! Unfortunately you lose the battle and King Roland takes control of your ship.';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(alienAlternateContinue);
  choiceBoxes.appendChild(alienAlternateEnd);

  alienAlternateContinue.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    alienAlternateContinue.parentNode.removeChild(alienAlternateContinue);
    alienAlternateEnd.parentNode.removeChild(alienAlternateEnd);
  });
  alienAlternateEnd.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    alienAlternateContinue.parentNode.removeChild(alienAlternateContinue);
    alienAlternateEnd.parentNode.removeChild(alienAlternateEnd);
  });
}

var goingInAstroid = function () {
  currentLocation = 'astroidAlternateStage';
  localStorage.setItem('currentLocation', currentLocation);
  var goingInContinueGame = function () {
    introText.textContent = 'You Scared the Exogorth and got away safely.';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('goingInAstroidShootExogorth');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      crewMemberChoice();
    });
  };
  var goingInEndGame = function () {
    introText.textContent = 'You were not able to avoid the Exogorth and he eats your ship.';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('goingInAstroidEatenByExogorth');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      exogorthAstroid();
    });
  };

  var goingInContinue = document.createElement('BUTTON');
  goingInContinue.setAttribute('class', 'rightButton');
  goingInContinue.textContent = 'Shoot the Exogorth with a missile!';
  goingInContinue.addEventListener('click', goingInContinueGame);

  var goingInEnd = document.createElement('BUTTON');
  goingInEnd.setAttribute('class', 'leftButton');
  goingInEnd.textContent = 'Try to avoid the monster';
  goingInEnd.addEventListener('click', goingInEndGame);

  var textGoingIn = document.getElementById('textinsert');
  textGoingIn.textContent = 'You decided to go through the astroid belt, not a smart choice there there is a Exogorth (The astroid monster from Star Wars) that is attacking the ship. What should you do?';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(goingInContinue);
  choiceBoxes.appendChild(goingInEnd);

  goingInContinue.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    goingInContinue.parentNode.removeChild(goingInContinue);
    goingInEnd.parentNode.removeChild(goingInEnd);
  });
  goingInEnd.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    goingInContinue.parentNode.removeChild(goingInContinue);
    goingInEnd.parentNode.removeChild(goingInEnd);
  });
};

var exogorthAstroid = function () {
  currentLocation = 'exogorthAstroidStage';
  localStorage.setItem('currentLocation', currentLocation);
  var exogorthContinueGame = function () {
    introText.textContent = 'You were successfully pooped out of the Exogorth. With your new Exogorth space ship cologne your able to move on to mars. ';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('exogorthAstroidPoopedOut');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      crewMemberChoice();
    });
  };

  var exogorthEndGame = function () {
    introText.textContent = 'You were able to blast the Exogorth\'s stomach and as his guts float throw the empty abyss of space as you try to escape you encounter King Roland who enslaves you for killing his favorite Exogorth and you become his personal maid.';
    continueButton = document.createElement('BUTTON');
    continueButton.setAttribute('class', 'continueButton');
    continueButton.textContent = 'Continue';
    var bottomButton = document.getElementById('continueButton');
    bottomButton.appendChild(continueButton);
    continueButton.addEventListener('click', function handler() {
      this.removeEventListener('click', handler);
      continueButton.parentNode.removeChild(continueButton);
      userChoices.push('exogorthAstroidShootAt');
      localStorage.setItem('userChoices', JSON.stringify(userChoices));
      druidiaChoice();
    });
  };

  var exogorthContinue = document.createElement('BUTTON');
  exogorthContinue.setAttribute('class', 'rightButton');
  exogorthContinue.textContent = 'Wait for the Exogorth to digest the ship and poop you out.';
  exogorthContinue.addEventListener('click', exogorthContinueGame);

  var exogorthEnd = document.createElement('BUTTON');
  exogorthEnd.setAttribute('class', 'leftButton');
  exogorthEnd.textContent = 'Blast the Exogorth\'s stomach so you can try to escape';
  exogorthEnd.addEventListener('click', exogorthEndGame);

  var textExogorth = document.getElementById('textinsert');
  textExogorth.textContent = 'You ended up in the belly of the beast good luck getting out. What bad decisions do you want to do now?  ';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(exogorthContinue);
  choiceBoxes.appendChild(exogorthEnd);

  exogorthContinue.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    exogorthContinue.parentNode.removeChild(exogorthContinue);
    exogorthEnd.parentNode.removeChild(exogorthEnd);
  });
  exogorthEnd.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    exogorthContinue.parentNode.removeChild(exogorthContinue);
    exogorthEnd.parentNode.removeChild(exogorthEnd);
  });
};

// -------------------------druidia--------------------------------

function druidiaChoice() {
  currentLocation = 'druidiaStage';
  localStorage.setItem('currentLocation', currentLocation);
  var druidiaContinueGame = function () {
    var storageName = 'Captain ' + jParse(localStorage.getItem('User'));
    if (!disableCrewEnd) {
      introText.textContent = `You have won the Princess over with your kindness, ${storageName}. To show you her gratitude she teaches you to dance the floss. Then returns you safely to your ship. You are back on track. Well done.`;
      continueButton = document.createElement('BUTTON');
      continueButton.setAttribute('class', 'continueButton');
      continueButton.textContent = 'Continue';
      var bottomButton = document.getElementById('continueButton');
      bottomButton.appendChild(continueButton);
      continueButton.addEventListener('click', function handler() {
        this.removeEventListener('click', handler);
        continueButton.parentNode.removeChild(continueButton);
        userChoices.push('druidiaChoiceWinPrincess');
        localStorage.setItem('userChoices', JSON.stringify(userChoices));
        mogChoice();
      });
    }
  };
  var druidiaEndGame = function () {
    introText.textContent = 'King Roland shows no mercy on you for your treacherous act! You will be tortured and executed and any kin you have will be forever hunted and destroyed.';
    if (!disableCrewEnd) {
      disableCrewEnd = true;
      druidiaEnd.style.backgroundColor = '#616161';
    }userChoices.push('druidiaChoiceThrowPrincess');
    localStorage.setItem('userChoices', JSON.stringify(userChoices));

    gameOver();
  };

  var druidiaContinue = document.createElement('BUTTON');
  druidiaContinue.setAttribute('class', 'leftButton');
  druidiaContinue.innerHTML = 'Assist the Princess to her bed and go for help!';
  druidiaContinue.addEventListener('click', druidiaContinueGame);

  var druidiaEnd = document.createElement('BUTTON');
  druidiaEnd.setAttribute('class', 'rightButton');
  druidiaEnd.innerHTML = 'Throw the Princess overboard! You will never stop fighting for your cause!';
  druidiaEnd.addEventListener('click', druidiaEndGame);

  var textdruidiaChoice = document.getElementById('textinsert');
  textdruidiaChoice.textContent = 'You are taken onto the ship of the Druidians. Weeks go by and you are forced to serve the royal family. One afternoon as you are going through your tasks you hear a woman crying. It it the Kings daughter, Princess Vespa. She has been injured trying to teach herself the moves to the newest Druidian dance craze, The Floss. She needs help and you are the only person nearby.';
  var choiceBoxes = document.getElementById('radioChoice');
  choiceBoxes.appendChild(druidiaContinue);
  choiceBoxes.appendChild(druidiaEnd);

  druidiaContinue.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    druidiaContinue.parentNode.removeChild(druidiaContinue);
    druidiaEnd.parentNode.removeChild(druidiaEnd);
  });
  druidiaEnd.addEventListener('click', function handler() {
    this.removeEventListener('click', handler);
    druidiaContinue.parentNode.removeChild(druidiaContinue);
    druidiaEnd.parentNode.removeChild(druidiaEnd);
  });

}

//--------------------Functions Called--------------------------//

loadData();
