// =======================================
// EMY'S WORLD
// CLEAN JAVASCRIPT SYSTEM
// PART 1 - CORE SYSTEM
// =======================================


// =======================================
// GLOBAL VARIABLES
// =======================================

let darkMode = true;
let matrixMode = false;

let visitCount = 0;
let commandCount = 0;
let gamesPlayed = 0;
let creatorCount = 0;
let windowZ = 100;

{}


// =======================================
// EMY OS BOOT
// =======================================

window.addEventListener("load",()=>{

const boot=get("bootScreen");

const output=get("bootOutput");

const bar=get("bootProgressBar");

if(!boot||!output||!bar) return;

const lines=[

"Initializing Kernel.............OK",

"Loading Portfolio...............OK",

"Loading Cyber Lab...............OK",

"Loading Developer Terminal......OK",

"Loading Security Services.......OK",

"Authenticating Visitor..........OK",

"",

"ACCESS GRANTED",

"",

"Welcome to Emy's World."

];

let index=0;

function next(){

if(index>=lines.length){

setTimeout(()=>{

boot.style.transition="opacity .8s";

boot.style.opacity="0";

setTimeout(()=>{

boot.style.display="none";

const desktop = document.getElementById("emyDesktop");

if(desktop){

desktop.style.display="block";

}

startClock();

},800);

},900);

return;

}

bar.style.width=((index+1)/lines.length*100)+"%";

const line=document.createElement("div");

line.textContent=lines[index];

output.appendChild(line);

index++;

setTimeout(next,420);

}

next();

addActivity("🚀 EMY OS Boot Complete");


});





// =======================================
// TYPEWRITER TITLE
// =======================================

const titleText =
"Welcome to Emy's World";


let titleIndex = 0;


function typeWriter(){


    const title = get("title");


    if(!title) return;


    if(titleIndex < titleText.length){


        title.innerHTML +=
        titleText.charAt(titleIndex);


        titleIndex++;


        setTimeout(
            typeWriter,
            80
        );


    }


}



// =======================================
// THEME SYSTEM
// =======================================

const themeButton =
get("themeButton");



if(themeButton){


themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("light");


    darkMode =
    !darkMode;



    if(darkMode){

        themeButton.innerHTML="🌙";


        addActivity(
        "🌙 Dark Mode activated"
        );


    }else{


        themeButton.innerHTML="☀️";


        addActivity(
        "☀️ Light Mode activated"
        );


    }


});


}




// =======================================
// MATRIX MODE
// =======================================


function toggleMatrix(){


    matrixMode =
    !matrixMode;


    document.body.classList.toggle(
        "matrix",
        matrixMode
    );


    if(matrixMode){


        addActivity(
        "🟩 Matrix Mode activated"
        );


    }else{


        addActivity(
        "⬛ Matrix Mode disabled"
        );


    }


}



// =======================================
// START
// =======================================

typeWriter();

// =======================================
// PART 2 - TERMINAL SYSTEM
// =======================================


const terminalInput =
get("terminalInput");


const terminalOutput =
get("terminalOutput");



let commandHistory = [];

let historyIndex = -1;



// =======================================
// TERMINAL PRINT
// =======================================


function printTerminal(text){


    if(!terminalOutput)
    return;



    const line =
    document.createElement("div");


    line.innerHTML =
    text;


    terminalOutput.appendChild(line);



    terminalOutput.scrollTop =
    terminalOutput.scrollHeight;


}



// =======================================
// COMMAND DATABASE
// =======================================


const commands = {


help(){

printTerminal(`
<b>AVAILABLE COMMANDS</b><br><br>

about - About Emy<br>
skills - My skills<br>
projects - Projects list<br>
clear - Clear terminal<br>
matrix - Toggle Matrix mode<br>
sudo emy - Creator access<br>
cyberlab - Open Cyber Lab

`);

},



about(){

printTerminal(`
<b>EMY'S WORLD</b><br><br>

Future Web Developer & Cybersecurity Enthusiast 💻<br>

Building websites, learning cybersecurity,
and documenting the journey.

`);

},



skills(){

printTerminal(`
<b>SKILLS</b><br><br>

HTML<br>
CSS<br>
JavaScript<br>
Cybersecurity Basics<br>
Web Development

`);

},



projects(){

printTerminal(`
<b>PROJECTS</b><br><br>

🌐 My First Website<br>
📝 Wikipedia Editing Journey<br>
🛡 Future Cybersecurity Projects

`);

},



clear(){

if(terminalOutput)

terminalOutput.innerHTML="";


},



matrix(){

toggleMatrix();


printTerminal(
"🟩 Matrix command executed"
);


},



"sudo emy"(){


creatorCount++;


addActivity(
"👑 Creator mode accessed"
);



printTerminal(`

<b>ACCESS GRANTED 👑</b><br><br>

Welcome Creator.

Developer privileges activated.

`);


},

cyberlab(){


printTerminal(`

<b>🛡 ACCESSING CYBER LAB...</b><br><br>

Loading security modules...

<br>

✓ Password Analyzer ONLINE<br>
✓ Hash Engine ONLINE<br>
✓ Encryption System ONLINE<br>
✓ Network Scanner ONLINE<br>

<br>

<b>ACCESS GRANTED 🔥</b>

`);



addActivity(
"🛡 Cyber Lab accessed from terminal"
);



const lab =
get("cyberLab");



if(lab){


setTimeout(()=>{


lab.scrollIntoView({

behavior:"smooth"

});


},800);


}

},

"whoami"(){

    printTerminal(`

<b>EMY OS USER PROFILE</b>

━━━━━━━━━━━━━━━━━━

👤 Name:
Emy

💻 Role:
Future Web Developer

🛡 Focus:
Cybersecurity Enthusiast

🚀 Status:
Building awesome projects.

`);

    addActivity("👤 whoami executed");

},

"about"(){

    printTerminal(`

<b>ABOUT EMY</b>

━━━━━━━━━━━━━━━━━━

I enjoy building websites,
learning JavaScript,
and exploring cybersecurity.

Current goal:
Become a professional developer.

`);

    addActivity("📄 About viewed");

},

"skills"(){

    printTerminal(`

<b>SKILLS</b>

━━━━━━━━━━━━━━━━━━

HTML        ██████████ 90%

CSS         █████████░ 85%

JavaScript  ███████░░░ 70%

CyberSec    █████░░░░░ 50%

`);

    addActivity("📊 Skills viewed");

},

"projects"(){

    printTerminal(`

<b>PROJECT DATABASE</b>

━━━━━━━━━━━━━━━━━━

① My First Website

STATUS: COMPLETE

━━━━━━━━━━━━━━━━━━

② Cyber Lab

STATUS: ACTIVE

━━━━━━━━━━━━━━━━━━

③ Future Security Tools

STATUS: DEVELOPMENT

`);

    addActivity("📁 Projects viewed");

},

"clear"(){

    output.innerHTML = "";

    addActivity("🧹 Terminal cleared");

}

};











// =======================================
// TERMINAL COMMAND RUNNER
// =======================================


function runTerminal(event){


if(event.key !== "Enter")
return;



let command =
terminalInput.value
.toLowerCase()
.trim();



if(command === "")
return;



commandHistory.push(command);

historyIndex =
commandHistory.length;



addActivity(
"💻 Command: " + command
);



printTerminal(
"emy@portfolio:~$ "
+ command
);



terminalInput.value="";



// Execute command


if(commands[command]){


commands[command]();


}

else{


printTerminal(
"Command not found. Type help."
);


}



}




// =======================================
// TERMINAL HISTORY
// =======================================


document.addEventListener(
"keydown",
(event)=>{


if(!terminalInput)
return;



if(document.activeElement !== terminalInput)
return;



if(event.key === "ArrowUp"){


if(commandHistory.length === 0)
return;


historyIndex--;


if(historyIndex < 0)
historyIndex=0;


terminalInput.value =
commandHistory[historyIndex];


}



if(event.key === "ArrowDown"){


historyIndex++;


if(historyIndex >= commandHistory.length){

historyIndex =
commandHistory.length;


terminalInput.value="";


return;

}


terminalInput.value =
commandHistory[historyIndex];


}


});

// =======================================
// PART 3 - ACTIVITY + VISITOR INTELLIGENCE
// =======================================



let visitorData = {


visits:0,

commands:0,

creator:0


};



// =======================================
// LOAD DATA
// =======================================


function loadVisitorData(){


const saved =
localStorage.getItem(
"emyVisitorData"
);



if(saved){


visitorData =
JSON.parse(saved);


}


}



// =======================================
// SAVE DATA
// =======================================


function saveVisitorData(){


localStorage.setItem(

"emyVisitorData",

JSON.stringify(visitorData)

);


}



// =======================================
// ACTIVITY FEED
// =======================================


function addActivity(message){



const feed =
get("activityFeed");



if(!feed)
return;



const item =
document.createElement("div");



let type =
"SYSTEM";



if(message.includes("Command"))

type="TERMINAL";


else if(message.includes("Creator"))

type="CREATOR";


else if(message.includes("Matrix"))

type="MATRIX";


else if(message.includes("Cyber"))

type="CYBER";




item.className =
"activity-item "
+
type.toLowerCase();



item.innerHTML = `

<b>${type}</b>

<br>

${new Date()
.toLocaleTimeString()}

<br>

${message}

`;



feed.prepend(item);



// keep latest 20

while(feed.children.length > 20){

feed.removeChild(
feed.lastChild
);

}


}



// =======================================
// VISITOR START
// =======================================


function startVisitorSession(){


loadVisitorData();



visitorData.visits++;


saveVisitorData();



addActivity(
"👤 Visitor entered Emy's World"
);



}



window.addEventListener(
"load",
()=>{

startVisitorSession();

});

// =======================================
// PART 4 - CYBER LAB SYSTEM
// =======================================



// =======================================
// PASSWORD ANALYZER
// =======================================


function checkPassword(){


const input =
get("passwordInput");


const result =
get("passwordResult");


if(!input || !result)
return;



let password =
input.value;


let score = 0;



if(password.length >= 8)
score++;


if(/[A-Z]/.test(password))
score++;


if(/[0-9]/.test(password))
score++;


if(/[^A-Za-z0-9]/.test(password))
score++;



let message;



if(score <= 1)

message =
"🔴 Weak Password";


else if(score === 2)

message =
"🟡 Medium Password";


else if(score === 3)

message =
"🟢 Strong Password";


else

message =
"💎 Excellent Password";



result.innerHTML =
message;



addActivity(
"🛡 Cyber password analysis completed"
);


}





// =======================================
// HASH GENERATOR
// =======================================


async function generateHash() {

    const input = document.getElementById("hashInput");
    const output = document.getElementById("hashOutput");

    if (!input || !output) return;

    const text = input.value;

    if (!text) {
        output.value = "⚠️ Enter some text first.";
        return;
    }

    try {

        const data = new TextEncoder().encode(text);

        const hashBuffer = await crypto.subtle.digest(
            "SHA-256",
            data
        );

        const hashArray = Array.from(
            new Uint8Array(hashBuffer)
        );

        const hashHex = hashArray
            .map(byte => byte.toString(16).padStart(2, "0"))
            .join("");

       output.value = hashHex;

unlockAchievement("cryptographer");

emyProfile.hashes++;

emyProfile.tools++;

addXP(10);

saveProfile();

if (typeof addActivity === "function") {
    addActivity("🔢 Hash generated");
}
unlockAchievement(
    "cryptographer",
    "Generate a SHA-256 hash"
);

    } catch (error) {

        output.value = "❌ Unable to generate hash.";

        console.error(error);
    }
}



// =======================================
// ENCRYPTION DEMO
// =======================================


function encryptText(){


const input =
get("encryptInput");


const result =
get("encryptResult");


if(!input || !result)
return;



let output="";



for(let char of input.value){


output +=
String.fromCharCode(
char.charCodeAt(0)+3
);


}



result.innerHTML =
output;



addActivity(
"🔒 Encryption demo used"
);


}





// =======================================
// NETWORK SCANNER
// =======================================


function runCyberScan(){


const result =
get("scanResult");


if(!result)
return;



result.innerHTML="";



let steps=[

"🔍 Initializing scanner",

"📡 Checking ports",

"PORT 22 SSH OPEN",

"PORT 80 HTTP OPEN",

"PORT 443 HTTPS OPEN",

"🛡 Firewall detected",

"✅ Scan complete"

];



let i=0;



function scan(){


if(i < steps.length){


let line =
document.createElement("p");


line.innerHTML =
steps[i];


result.appendChild(line);


i++;


setTimeout(
scan,
700
);


}

else{


addActivity(
"🛰 Cyber scan completed"
);


}


}



scan();


}

// =======================================
// SECURITY DASHBOARD
// =======================================


function loadSecurityDashboard(){


const box =
get("securityDashboard");


if(!box)
return;



let systems = [

{
name:"Password Security",
score:80
},

{
name:"Encryption Engine",
score:90
},

{
name:"Network Protection",
score:70
}

];



box.innerHTML="";



systems.forEach(system=>{


let container =
document.createElement("div");



container.innerHTML = `

<p>
${system.name}
</p>


<div style="
width:100%;
height:15px;
background:#111;
border:1px solid cyan;
border-radius:10px;
overflow:hidden;
">


<div style="
width:${system.score}%;
height:100%;
background:cyan;
box-shadow:0 0 15px cyan;
">
</div>


</div>


<p>
${system.score}%
</p>

`;



box.appendChild(container);



});



let overall =
Math.round(
systems.reduce(
(a,b)=>a+b.score,
0
)
/ systems.length
);



let final =
document.createElement("h3");


final.innerHTML =
"Overall Security Score: "
+ overall
+ "%";



box.appendChild(final);



addActivity(
"🛡 Security dashboard loaded"
);



}



window.addEventListener(
"load",
loadSecurityDashboard
);

// =======================================
// LIVE HACKER DASHBOARD ENGINE
// =======================================


function startHackerDashboard(){


const cpu =
get("cpuBar");


const ram =
get("ramBar");


const traffic =
get("networkTraffic");


const packets =
get("packetCount");


const visitors =
get("dashVisitors");


const session =
get("sessionTime");




if(
!cpu ||
!ram ||
!traffic ||
!packets ||
!visitors ||
!session
){

return;

}

// ============================
// PERFORMANCE MONITOR
// ============================


setInterval(()=>{


let cpuValue =
Math.floor(
Math.random()*60
)+20;


let ramValue =
Math.floor(
Math.random()*50
)+30;



cpu.style.width =
cpuValue+"%";


ram.style.width =
ramValue+"%";


get("cpuValue").innerHTML =
cpuValue+"%";


get("ramValue").innerHTML =
ramValue+"%";



},2000);




// ============================
// NETWORK MONITOR
// ============================


let packetTotal = 0;



setInterval(()=>{


let speed =
Math.floor(
Math.random()*900
)+100;



packetTotal +=
Math.floor(
Math.random()*20
)+1;



traffic.innerHTML =
speed+" KB/s";



packets.innerHTML =
packetTotal;



},1000);




// ============================
// VISITOR SYSTEM
// ============================


setInterval(()=>{


if(typeof visitorData !== "undefined"){


visitors.innerHTML =
visitorData.visits;


}



},1000);




// ============================
// SESSION TIMER
// ============================


let seconds = 0;



setInterval(()=>{


seconds++;


let h =
Math.floor(seconds/3600);



let m =
Math.floor(
(seconds%3600)/60
);



let s =
seconds%60;



session.innerHTML =

String(h).padStart(2,"0")
+":"
+
String(m).padStart(2,"0")
+":"
+
String(s).padStart(2,"0");



},1000);



addActivity(
"🖥 Hacker Dashboard activated"
);



}



// Start Dashboard

window.addEventListener(
"load",
()=>{


startHackerDashboard();


});



// =====================================
// START MENU
// =====================================

function toggleStartMenu(){

const menu=document.getElementById("startMenu");

if(!menu) return;

if(menu.style.display==="block"){

menu.style.display="none";

}else{

menu.style.display="block";

}

}

// =====================================
// AUTO CLOSE START MENU
// =====================================

document.addEventListener("click",(e)=>{

const menu=document.getElementById("startMenu");

const button=document.querySelector(".start-button");

if(!menu || !button) return;

if(

!menu.contains(e.target)

&&

!button.contains(e.target)

){

menu.style.display="none";

}

});

// =======================================
// LIVE CLOCK
// =======================================

function startClock(){

const clock=document.getElementById("taskClock");

if(!clock) return;

setInterval(()=>{

const now=new Date();

clock.innerHTML=

now.toLocaleTimeString();

},1000);

}

document.querySelectorAll(".desktop-shortcut").forEach(icon=>{

icon.addEventListener("click",()=>{

document

.querySelectorAll(".desktop-shortcut")

.forEach(i=>i.classList.remove("selected"));

icon.classList.add("selected");

});

});

// =====================================
// EMY OS WINDOW DRAG SYSTEM
// =====================================

document.querySelectorAll(".drag-handle").forEach(header=>{

let windowBox = header.parentElement;

let offsetX = 0;
let offsetY = 0;
let dragging = false;

header.addEventListener("mousedown",(e)=>{

dragging = true;

offsetX = e.clientX - windowBox.offsetLeft;
offsetY = e.clientY - windowBox.offsetTop;

windowBox.style.zIndex = Date.now();

});

document.addEventListener("mousemove",(e)=>{

if(!dragging) return;

windowBox.style.left =
(e.clientX-offsetX)+"px";

windowBox.style.top =
(e.clientY-offsetY)+"px";

// SAVE POSITION

localStorage.setItem(
"window-"+windowBox.id,
JSON.stringify({
left:windowBox.style.left,
top:windowBox.style.top
})
);

});

document.addEventListener("mouseup",()=>{

dragging = false;

});

});


// =====================================
// RESTORE WINDOW POSITIONS
// =====================================

window.addEventListener("load",()=>{

document.querySelectorAll(".os-window").forEach(win=>{

const saved = JSON.parse(
localStorage.getItem("window-"+win.id)
);

if(saved){

win.style.left = saved.left;
win.style.top = saved.top;

}

});

});
// =====================================
// DESKTOP SHORTCUT ACTIONS
// =====================================

const explorerShortcut = document.getElementById("explorerShortcut");

if(explorerShortcut){

explorerShortcut.addEventListener("dblclick",()=>{

openExplorer();

});

}

function analyzePassword(){

const input=document.getElementById("cyberPasswordInput");
const bar=document.getElementById("passwordStrengthBar");

const text=document.getElementById("passwordStrengthText");

if(!input||!bar||!text) return;

let password=input.value;

let score=0;

if(password.length>=8) score++;

if(/[A-Z]/.test(password)) score++;

if(/[a-z]/.test(password)) score++;

if(/[0-9]/.test(password)) score++;

if(/[^A-Za-z0-9]/.test(password)) score++;

let percent=score*20;

bar.style.width=percent+"%";

if(score<=1){

bar.style.background="red";

text.innerHTML="🔴 Weak Password";

}

else if(score<=3){

bar.style.background="orange";

text.innerHTML="🟡 Medium Password";

}

else{

bar.style.background="lime";

text.innerHTML="🟢 Strong Password";

}


}

// =======================================
// NETWORK SCANNER
// =======================================

function startNetworkScan() {

    const status = document.getElementById("scanStatus");
    const progress = document.getElementById("scanProgress");


    if (!status) return;


    const lines = [

        "🛰 Initializing network scanner...",
        "🔍 Scanning local network...",
        "🔌 Checking common ports...",
        "💻 Finding active devices...",
        "🛡 Analyzing firewall status...",
        "🔐 Checking security configuration...",
        "━━━━━━━━━━━━━━━━━━━━",
        "SCAN COMPLETE",
        "Devices detected: 3",
        "Common ports checked: 22, 80, 443",
        "Firewall: ACTIVE ✅",
        "Network status: SECURE 🟢"

    ];


    let i = 0;


    status.innerHTML = "";


    if (progress) {

        progress.style.width = "0%";

    }



    function next() {


        if (i >= lines.length) {

    if (progress) {
        progress.style.width = "100%";
    }

    unlockAchievement(
        "networkScout",
        "Complete a network scan"
    );

    emyProfile.scans++;

    emyProfile.tools++;

    addXP(15);

    saveProfile();

    return;
}

        



        status.innerHTML += lines[i] + "<br>";



        if (progress) {


            const percentage =
            Math.round(
                ((i + 1) / lines.length) * 100
            );


            progress.style.width =
            percentage + "%";


        }



        i++;


        setTimeout(next, 700);


    }



    next();


}

// =======================================
// EXIT MATRIX MODE
// =======================================

function exitMatrix() {

    const matrixMode = document.getElementById("matrixMode");

    if (!matrixMode) return;

    matrixMode.style.display = "none";

    // Restore normal website scrolling
    document.body.style.overflow = "";

}

// =======================================
// MATRIX TERMINAL
// =======================================

function runMatrixCommand(event) {

    if (event.key !== "Enter") return;

    const input = event.target;
    const command = input.value.trim().toLowerCase();

    if (!command) return;

    const screen = document.querySelector(".matrix-terminal-screen");

    if (!screen) return;

    const line = document.createElement("p");

    line.textContent = "emy@matrix:~$ " + command;

    screen.appendChild(line);

    input.value = "";

    const response = document.createElement("p");

    switch (command) {

        case "help":

            response.textContent =
                "AVAILABLE COMMANDS: help | status | system | whoami | scan | tools | clear | exit";

            break;

        case "status":

            response.textContent =
                "SYSTEM: ONLINE | FIREWALL: ACTIVE | ENCRYPTION: ACTIVE | NETWORK: SECURE";

            break;

        case "system":

            response.textContent =
                "EMY OS v2.0 | MATRIX CORE: ACTIVE | CREATOR ACCESS: GRANTED";

            break;

        case "whoami":

            response.textContent =
                "CREATOR: EMY";

            break;

        case "scan":

            response.textContent =
                "NETWORK SCAN INITIALIZED... SIMULATED SCAN COMPLETE.";

            break;

        case "tools":

            response.textContent =
                "MATRIX TOOLS: STATUS | SYSTEM | SCAN | WHOAMI";

            break;

        case "clear":

            screen.innerHTML = "";

            return;

        case "exit":

            exitMatrix();

            return;

        default:

            response.textContent =
                "COMMAND NOT FOUND. TYPE 'help' FOR AVAILABLE COMMANDS.";

    }

    screen.appendChild(response);

    screen.scrollTop = screen.scrollHeight;

}

// =======================================
// MATRIX CYBER LAB STATUS ANIMATION
// =======================================

function startCyberLabSystems() {

    const bars = document.querySelectorAll(
        "#cyberWindow .os-progress-bar"
    );

    if (!bars.length) return;

    bars.forEach((bar, index) => {

        bar.style.width = "0%";

        setTimeout(() => {

            let progress = 0;

            const interval = setInterval(() => {

                progress += Math.floor(Math.random() * 8) + 3;

                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                }

                bar.style.width = progress + "%";

            }, 120);

        }, index * 500);

    });
}

// =======================================
// CYBER LAB LIVE SECURITY MONITOR
// =======================================

function startCyberLabMonitor() {

    const cyberWindow = document.getElementById("cyberWindow");

    if (!cyberWindow) return;

    const bars = cyberWindow.querySelectorAll(".security-fill");

    if (bars.length < 3) return;

    function updateSecurityBars() {

        const integrity = 95 + Math.floor(Math.random() * 6);
        const firewall = 92 + Math.floor(Math.random() * 7);
        const network = 85 + Math.floor(Math.random() * 10);

        bars[0].style.width = integrity + "%";
        bars[1].style.width = firewall + "%";
        bars[2].style.width = network + "%";
    }

    updateSecurityBars();

    setInterval(updateSecurityBars, 3000);
}

window.addEventListener("load", () => {
    startCyberLabMonitor();
});

// =======================================
// CYBER LAB TOOL ACTIVITY
// =======================================

function cyberToolActivity(tool) {

    const cyberWindow = document.getElementById("cyberWindow");

    if (!cyberWindow) return;

    const bars = cyberWindow.querySelectorAll(".security-fill");

    if (bars.length < 3) return;

    if (tool === "password") {

        bars[0].style.width = "100%";
        bars[1].style.width = "98%";

    }

    if (tool === "hash") {

        bars[0].style.width = "99%";
        bars[1].style.width = "100%";

    }

    if (tool === "network") {

        bars[1].style.width = "100%";
        bars[2].style.width = "100%";

    }

    if (tool === "secret") {

        bars[0].style.width = "100%";
        bars[1].style.width = "100%";
        bars[2].style.width = "98%";

    }

}


// Watch the existing Cyber Lab buttons
document.addEventListener("click", (event) => {

    const button = event.target.closest(
        "#cyberWindow .creator-controls button"
    );

    if (!button) return;

    const text = button.textContent.toLowerCase();

    if (text.includes("password")) {

        cyberToolActivity("password");

    } else if (text.includes("hash")) {

        cyberToolActivity("hash");

    } else if (text.includes("network")) {

        cyberToolActivity("network");

    } else if (text.includes("secret")) {

        cyberToolActivity("secret");

} else if (text.includes("secret")) {

    cyberToolActivity("secret");

}
});

function loginEMYOS(){

    const password =
    document.getElementById("osPassword").value;

    const message =
    document.getElementById("loginMessage");

    if(password === "Emy2026"){

        message.style.color="#00ff66";

        message.innerHTML =
        "ACCESS GRANTED 👑";

        setTimeout(()=>{

            document.getElementById(
                "emyLockScreen"
            ).style.display="none";

            startEMYBoot();

        },1500);

    }else{

        message.style.color="red";

        message.innerHTML =
        "ACCESS DENIED ❌";

    }

}

function startEMYBoot(){

    const bootScreen =
    document.getElementById("emyBootScreen");

    const bootProgress =
    document.getElementById("bootProgress");

    const bootLog =
    document.getElementById("bootLog");

    const bootMessage =
    document.getElementById("bootMessage");

    if(
        !bootScreen ||
        !bootProgress ||
        !bootLog ||
        !bootMessage
    ) return;

    bootScreen.style.display = "flex";

    bootProgress.style.width = "0%";

    bootLog.innerHTML = "";

    const steps = [

        "Initializing system kernel...",

        "✓ Matrix Core loaded",

        "✓ Cyber Lab activated",

        "✓ File Explorer connected",

        "✓ Security systems online",

        "✓ Secret files decrypted",

        "WELCOME BACK, CREATOR 👑"

    ];

    let i = 0;

    function nextStep(){

        if(i >= steps.length){

            bootProgress.style.width = "100%";

            setTimeout(()=>{

                bootMessage.innerHTML =
                "EMY OS READY 🚀";

                setTimeout(()=>{

                    bootScreen.style.display =
                    "none";

                },1000);

            },500);

            return;
        }

        bootLog.innerHTML +=
        "> " + steps[i] + "<br>";

        const percentage =
        Math.round(
            ((i + 1) / steps.length) * 100
        );

        bootProgress.style.width =
        percentage + "%";

        i++;

        setTimeout(nextStep, 700);

    }

    nextStep();

}

// =======================================
// EMY OS ACHIEVEMENT SYSTEM
// =======================================

const achievements = {

    matrixWalker: {
        name: "MATRIX WALKER",
        description: "Enter Matrix Mode"
    },

    networkScout: {
        name: "NETWORK SCOUT",
        description: "Complete a network scan"
    },

    cryptographer: {
        name: "CRYPTOGRAPHER",
        description: "Generate a SHA-256 hash"
    },

    fileExplorer: {
        name: "FILE EXPLORER",
        description: "Open a secret file"
    },

    cyberDefender: {
        name: "CYBER DEFENDER",
        description: "Use the Cyber Lab tools"
    }

};


function unlockAchievement(id) {

    const achievement = achievements[id];

    if (!achievement) return;

    const unlocked =
    JSON.parse(
        localStorage.getItem("emyAchievements")
    ) || [];

    if (unlocked.includes(id)) return;

    unlocked.push(id);

    localStorage.setItem(
        "emyAchievements",
        JSON.stringify(unlocked)
    );

    showAchievementNotification(achievement);

    updateAchievements();

}


function showAchievementNotification(achievement) {

    const notification =
    document.createElement("div");

    notification.className =
    "achievement-notification";

    notification.innerHTML = `

        🏆 ACHIEVEMENT UNLOCKED

        <br><br>

        <strong>
            ${achievement.name}
        </strong>

        <br>

        <small>
            ${achievement.description}
        </small>

    `;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 500);

    }, 4000);

}


function updateAchievements() {

    const unlocked =
    JSON.parse(
        localStorage.getItem("emyAchievements")
    ) || [];

    const achievementElements =
    document.querySelectorAll(".achievement");

    const ids = [

        "matrixWalker",
        "networkScout",
        "cryptographer",
        "fileExplorer",
        "cyberDefender"

    ];

    achievementElements.forEach(
        (element, index) => {

            const id = ids[index];

            if (unlocked.includes(id)) {

                element.classList.remove("locked");

                element.classList.add("unlocked");

                const icon =
                element.querySelector("div");

            }

        }

    );

}


window.addEventListener(
    "load",
    updateAchievements
);

// =======================================
// EMY OS PROFILE SYSTEM
// =======================================

let emyProfile = JSON.parse(
    localStorage.getItem("emyProfile")
) || {

    xp: 0,

    achievements: 0,

    hashes: 0,

    scans: 0,

    files: 0,

    tools: 0

};

// SYNC SAVED ACHIEVEMENTS WITH PROFILE

if (typeof unlockedAchievements !== "undefined") {

    emyProfile.achievements =
    unlockedAchievements.size;

    saveProfile();

}


// Make sure older saved profiles also get this property

if (typeof emyProfile.achievements === "undefined") {

    emyProfile.achievements = 0;

}


// SAVE PROFILE

function saveProfile() {

    localStorage.setItem(
        "emyProfile",
        JSON.stringify(emyProfile)
    );

}


// ADD XP

function addXP(amount) {

    emyProfile.xp += amount;

    saveProfile();

    updateProfile();

}


// UPDATE PROFILE WINDOW

function updateProfile() {

    const level =
        Math.floor(emyProfile.xp / 100) + 1;

    const currentXP =
        emyProfile.xp % 100;


    const profileLevel =
        document.getElementById("profileLevel");

    const xpBar =
        document.getElementById("xpBar");

    const xpText =
        document.getElementById("xpText");


    if (profileLevel) {

        profileLevel.textContent =
            "LEVEL " + level;

    }


    if (xpBar) {

        xpBar.style.width =
            currentXP + "%";

    }


    if (xpText) {

        xpText.textContent =
            currentXP + " / 100 XP";

    }


    const hashCount =
        document.getElementById("hashCount");

    const scanCount =
        document.getElementById("scanCount");

    const fileCount =
        document.getElementById("fileCount");

    const toolCount =
        document.getElementById("toolCount");

    const achievementCount =
        document.getElementById("achievementCount");


    if (hashCount) {

        hashCount.textContent =
            emyProfile.hashes;

    }


    if (scanCount) {

        scanCount.textContent =
            emyProfile.scans;

    }


    if (fileCount) {

        fileCount.textContent =
            emyProfile.files;

    }


    if (toolCount) {

        toolCount.textContent =
            emyProfile.tools;

    }


    // COUNT SAVED ACHIEVEMENTS

    const savedAchievements =
        JSON.parse(
            localStorage.getItem("emyAchievements") || "[]"
        );


    if (achievementCount) {

        achievementCount.textContent =
            savedAchievements.length;

    }


    // KEEP PROFILE DATA IN SYNC

    if (typeof emyProfile !== "undefined") {

        emyProfile.achievements =
            savedAchievements.length;

    }

}


// LOAD PROFILE

document.addEventListener(
    "DOMContentLoaded",
    updateProfile
);