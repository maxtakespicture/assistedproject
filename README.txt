Sending a Message - Simple Javascript Program

---------------------------

CONTEXT

    Fire Rhythm is a group of performers who dance with fire poi. They offer their services as performers for corporate events, weddings, birthdays, etc. The website has a 'contact' page that can be used to submit either a booking request or feedback on a performance.
    
    
REQUIREMENTS

    The user of the website:
        -should be able to use the contact form to submit a simple message along with their own identifying details; they should also receive a copy of this message
        
    The admin of the website:
        -should be able to receive this message and its details


A LITTLE MORE DETAIL

    The user can enter:
        -their name
        -their contact number (optional)
        -their email address
        -a message up to 2000 characters long
        
    Once the form is submitted:
        -the user's mail client opens.
        -Their message is already input into the client's message field.
        -The user's name and contact number are addended to this message.
        -Their own email address is in the 'to' field. 
        -The administrator's address is in the 'bcc' field.
        
        
HOW THIS IS DONE

    --The user inputs:
        -name
        -contact number (optional)
        -email
        -message
        
    --------------    
    EVENT: The user clicks the submit button
    --------------
        
    --  An event listener captures this event.
    
    --  The submit button is an href, whose default function is voided to allow the     event listener function to run instead.
        
    --  The event listener runs submitForm().
    
    --  submitForm():
    
        -   variables are declared which house each of the user's inputs.
        
        -   the variable 'href' defines the mailto link which opens the user's email     client.
        
        -   href is compiled step by step:
            -first the 'to' email, or the user's email;
            -the subject's message, which is 'A message from [user's name]';
            -the email's bcc, which is the administrator's email;
            -the email's body, which is compiled in the function compileMsg().
            
    --  compileMsg(formMsg, formName, formNumber);

        -   the message, name and number are parsed into the function for use in         compiling the final message

        -   the variable 'message' holds the final message that is entered into the     email field
        
        -   'message' is compiled line by line, beginning with a greeting to the         user

        -   once the entire message is compiled, it is returned for use in               submitForm()


    -- the email client opens with all information in the correct place. Hooray!


























