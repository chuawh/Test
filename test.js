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
say("We have received your SMS" +'\n');
say("You asked about " + currentCall.InitialText);
*/

//Sending SMS
message("You have an appointment at 2 pm on Thursday", {
    to:"+6597809414",
    network:"SMS"
});

