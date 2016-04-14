//Tropo demo script

//Incoming Call
/*say("https://www.tropo.com/docs/troporocks.mp3");
say("Thanks for calling Tropo.",{voice: "veronica"});
*/

//Asking Questions
/*
var result = ask("What's your favorite color?  Choose from red, blue or green.", {
   choices:"red, blue, green"
});
say("You said" + result.value);
*/

//Answering Incoming SMS
/*
call("+6597809414", {
   network:"SMS"});
say("We have received your SMS. " + "You asked about " + currentCall.initialText);
*/
//Sending SMS

/*
message("We have received your SMS. " + "You asked about " + currentCall.initialText, {
    to:"+6597809414",
    network:"SMS"
});*/


message("Tropo test message, please ignore", {
    to:"+62811132784",
    network:"SMS"
});


//Sending SMS using variable
/*
message(textMsg, {
    to:"+" + recipient,
    network:"SMS"
});
*/
