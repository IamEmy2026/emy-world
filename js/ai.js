function runAI(event){

if(event && event.key && event.key!=="Enter") return;

const input=get("aiInput");

const chat=get("aiConversation");

if(!input || !chat) return;

const text=input.value.trim();

if(text==="") return;

if(

text.toLowerCase().includes("developer")

||

text.toLowerCase().includes("unlock")

||

text.toLowerCase().includes("sudo emy")

){

unlockDeveloperMode();

}


const user=document.createElement("div");

user.className="ai-message user-message";

user.innerHTML="<strong>You:</strong> "+text;

chat.appendChild(user);

const ai=document.createElement("div");

ai.className="ai-message";

let response = aiReply(text);

if(aiNavigate(text)){

response += "<br><br>📍 Opening requested section...";

}

ai.innerHTML="<strong>EMY AI:</strong><br>"+response;
chat.appendChild(ai);

chat.scrollTop=chat.scrollHeight;

input.value="";

}


// =======================================
// EMY AI ASSISTANT
// =======================================


function aiReply(question){

question = question.toLowerCase();

if(question==="help"){

return `
Available commands:

• about

• projects

• skills

• cyber

• music

• contact

• creator

`;

}

if(question.includes("about")){

return "Emy is a future web developer and cybersecurity enthusiast building projects with HTML, CSS and JavaScript.";

}

if(question.includes("projects")){

return "Current projects include Emy's World, Cyber Lab, Live Hacker Dashboard and the Global Attack Map.";

}

if(question.includes("skills")){

return "HTML, CSS, JavaScript, Cybersecurity, UI Design and Wikipedia Editing.";

}

if(question.includes("cyber")){

return "Cybersecurity focuses on protecting computers, networks and data from attacks.";

}

if(question.includes("music")){

return "Favourite artists include Wizkid, BNXN and Dave.";

}

if(question.includes("contact")){

return "Use the Contact section of the website to reach Emy.";

}

if(question.includes("creator")){

return "This website was designed and built by Emy.";

}

return "I don't know that yet. Try typing 'help'.";
}


// =======================================
// AI NAVIGATION
// =======================================

function aiNavigate(command){

command = command.toLowerCase();

const locations={

"home":"title",

"top":"title",

"about":"about",

"projects":"projects",

"cyber":"cyberLab",

"cyber lab":"cyberLab",

"dashboard":"hackerDashboard",

"attack":"attackMap",

"attack map":"attackMap",

"ai":"emyAI",

"contact":"contact"

};

for(let key in locations){

if(command.includes(key)){

const target=get(locations[key]);

if(target){

setTimeout(()=>{

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

},500);

return true;

}

}

}

return false;

}


