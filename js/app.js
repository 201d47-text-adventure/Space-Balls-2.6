    'use strict'

var fromvalidator = new validator('userform');
    fromvalidator.addValidation('UserName', 'req', 'Please enter your User Name');
    fromvalidator.addValidation('UserName', 'maxlen=15', 'Max length for UserName is 15');



var textDisplay
var continueGame
var endGame
var inputAnswers = []

//----------------------------------------------//
function Choice() {
     TextDisplay =  document.getElementById('textinsert');
    var test = function() {
        if( inputAnswers = 'go around' || 'go around astroid belt') {
            alert('wow------you made it');
        }
        else{ alert('oh no! -----')};
    }
 
}

endGame = function() {
    alert('oh no! you----Game Over')

}

document.getElementById('eventTrigger').addEventListener('submit', Choice.test)




