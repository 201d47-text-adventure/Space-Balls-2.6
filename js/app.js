
    'use strict'

// var fromvalidator = new validator('userform');
//     fromvalidator.addValidation('UserName', 'req', 'Please enter your User Name');
//     fromvalidator.addValidation('UserName', 'maxlen=15', 'Max length for UserName is 15');



var textDisplay
var continueGame
var endGame
var inputAnswers = []

//----------------------------------------------//
function introductionText() {
    var introText = document.getElementById('textinsert');
    introText.textContent = `Pilot the world is in a dire situation. Over the past few years melting of the polar ice caps has accelerated. Florida and parts of Italy are completely user the high sea levels. The world has banned together and found that is possible to establish ourselves on Mars. You have been elected to carry out the initial journey. Your resources will be limited for this journey. How you manage these resources will utlilmatly determine your success as well as the survival of the human race.`
    var insertStartButton = document.getElementById('startbutton')
    var startButton = document.createElement('button');
    startButton.textContent = `Start Adventure`
    insertStartButton.append(startButton);
};

function choiceOne() {
    var textChoiceOne = document.getElementById('textinsert');
    textChoiceOne.textContent = `You have successfully gotten to orbit. There is an astroid belt in front of you. What do you do?`};

    var choiceOneMade = function(event) {
        event.preventDefault();
        var choiceOneCorrect = document.getElementById('textinsert');
        if (inputAnswers === 'go around' || inputAnswers ==='go around astroid belt'){
        choiceOneCorrect.textContent = `You continue around the belt saving your ship from being damaged`
        } else {
            var choiceOneIncorrect = document.getElementById('textinsert');
            choiceOneIncorrect.textContent = `Your ship has been damaged by space particle`
        }
    };


    choicemade.addEventListener('click', choiceOneMade);

    introductionText();
    // choiceOne();

    
    var startGame = function(event) {
        event.preventDefault();
    }
    startGame = document.getElementById('startbutton')
    startGame.addEventListener('click', choiceOne)

