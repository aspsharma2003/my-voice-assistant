let bttn=document.getElementById("btn");
let content=document.getElementById("content");
let vimg=document.getElementById("vimg");
function speak(text){
 let syn=window.speechSynthesis;
 let text_speak= new SpeechSynthesisUtterance(text);
 text_speak.pitch=1;
 text_speak.rate=1;
 text_speak.volume=1;
 text_speak.lang="hi-GB"
 syn.speak(text_speak);
}
// window.addEventListener("load",handleload);
// function handleload(){
//     speak("Hello");
// }
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
bttn.addEventListener("click",()=>{
  recognition.start();
  bttn.style.display="none";
  vimg.style.display="block";
//   speak("please start speaking");
});
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    console.log(transcript);
    content.innerText=transcript;
    let newt=transcript.toLowerCase();
    takecommand(newt);
};
function takecommand(mssg){
    vimg.style.display="none";
    bttn.style.display="flex";
    bttn.style.gap=3;
if(mssg.includes("hello")||mssg.includes("hi")||mssg.includes("hi choco")||mssg.includes("hello choco")){
   speak("Hello ,How can i help you ");
}
else if(mssg.includes("your name")|| mssg.includes("introduce yourself")||mssg.includes("who is choco")){
    speak("My name is CHOCO and i am developed by Sir Abhinav Sharma");
}
else if(mssg.includes("who are you")){
 speak("I am a virtual assistant created by Abhinav Sharma");
}
else if(mssg.includes("who created you")||mssg.includes("your creator")||mssg.includes("who made you")){
   speak("A tech enthusiast name Abhinav Sharma created me. He is very passionate about technical things .Do you want to know about him more?if yes please reply with yes  i want");
}
else if(mssg.includes("yes i want")){
  speak("sure!! Here is his portfolio");
}
else if(mssg.includes("what is time now")||mssg.includes("tell me the time")||mssg.includes("time kya ho raha h")){
  let today= new Date();
  let time=today.toLocaleString('en-US', { hour: 'numeric', hour12: true })
  speak(time);
}
else if(mssg.includes("open youtube")){
    speak("opening youtube...");
    window.open("https://www.youtube.com");
}
else if(mssg.includes("open google")){
    speak("opening google...");
  window.open("https://www.google.com");
}
else if(mssg.includes("open instagram")){
    speak("opening instagram...");
    window.open("https://www.instagram.com");
}
else if(mssg.includes("play my favourite song")){
    speak("playing your current favourite song");
   window.open("https://www.youtube.com/watch?v=AKH6ZNSnWOA");
} 
else{
    speak("This is what i found on internet about"+mssg.replace("choco","")||mssg.replace("hey choco",""));
    var newmsg=mssg.replace("choco","")||mssg.replace("hey choco","");
    window.open(`https://www.google.com/search?q=${newmsg}`);
}
}