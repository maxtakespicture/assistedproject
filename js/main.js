//Event listener to catch when the user submits the form

subbtn.addEventListener("click", submitForm);


//The function to execute onclick of the submit button

function submitForm() {
    
    var form = document.getElementById('contact-form');
    var formName = document.getElementById('form-name').value;
    var formNumber = document.getElementById('form-number').value;
    var formEmail = document.getElementById('form-email').value;
    var formMsg = document.getElementById('form-msg').value;
    var subbtn = document.getElementById('subbtn');

    var href = 'mailto:';
    
    href += formEmail;
    href += '?subject=A message from ' + formName;
    href += '&bcc=info@firerhythm.com';
    href += '&body=' + compileMsg(formMsg, formName, formNumber);
    
    document.location = href;
}


//The function to compile the message

function compileMsg(formMsg, formName, formNumber) {

    var message = '';
    
    message += 'Hello, ' + formName + '%0D%0A';
    message += '%0D%0A';
    message += 'Thank you for contacting Fire Rhythm. Below is a copy of your message.';
    message += '%0D%0A';
    message += '--------------------------------------------';
    message += '%0D%0A';
    message += '"' + formMsg + '"';
    message += '%0D%0A';
    message += 'From' + formName + ', ' + formNumber;
    message += '--------------------------------------------';
    message += '%0D%0A';
    message += 'We will be sure to get back to you as soon as we can.';
    
    return message;
    
}
