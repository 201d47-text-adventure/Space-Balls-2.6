'use strict'

var fromvalidator = new validator('myform');
    fromvalidator.addValidation('UserName', 'req', 'Please enter your User Name');
    fromvalidator.addValidation('UserName', 'maxlen=15', 'Max length for UserName is 15');