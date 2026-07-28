// =====================================================
// EMY'S WORLD OS
// Refactored JavaScript Core
// Part 1/5 - Core + UI Foundation
// =====================================================


// =====================================================
// GLOBAL STATE
// =====================================================

const EMY_OS = {

    version: "v3.0",

    developerMode: false,

    matrixMode: false,

    darkMode: true,

    booted: false,

    visitors: 0,

    commands: 0,

    games: 0,

    creators: 0

};


// =====================================================
// DOM REFERENCES
// =====================================================

const terminalInput =
document.getElementById("terminalInput");


const terminalOutput =
document.getElementById("terminalOutput");


const activityFeed =
document.getElementById("activityFeed");


// =====================================================
// TERMINAL OUTPUT ENGINE
// =====================================================

function printTerminal(text){

    if(!terminalOutput) return;


    const line =
    document.createElement("div");


    terminalOutput.appendChild(line);


    let index = 0;


    function typing(){

        if(index < text.length){

            line.innerHTML +=
            text.charAt(index);

            index++;

            setTimeout(
                typing,
                25
            );

        }

    }


    typing();

}



// =====================================================
// UTILITY
// =====================================================

function delay(ms){

    return new Promise(resolve =>
        setTimeout(resolve,ms)
    );

}



// =====================================================
// CLOCK SYSTEM
// =====================================================

function updateClock(){

    const clock =
    document.getElementById("clock");


    if(!clock) return;


    clock.innerHTML =
    new Date()
    .toLocaleTimeString();

}


setInterval(
    updateClock,
    1000
);




// =====================================================
// THEME SYSTEM
// =====================================================


function toggleTheme(){

    document.body
    .classList
    .toggle("light");


    EMY_OS.darkMode =
    !EMY_OS.darkMode;


    addActivity(
        EMY_OS.darkMode
        ?
        "🌙 Theme changed to Dark"
        :
        "☀️ Theme changed to Light"
    );


}



// =====================================================
// TYPEWRITER TITLE
// =====================================================


function startTitle(){

    const title =
    document.getElementById("title");


    if(!title) return;


    const text =
    "Welcome to Emy's World";


    title.innerHTML="";


    let i = 0;


    function write(){

        if(i < text.length){

            title.innerHTML +=
            text[i];

            i++;

            setTimeout(
                write,
                80
            );

        }

    }


    write();

}



// =====================================================
// PARTICLE / BACKGROUND SUPPORT
// =====================================================


function createParticles(){

    const amount = 50;


    for(
        let i=0;
        i<amount;
        i++
    ){

        const particle =
        document.createElement("span");


        particle.className =
        "particle";


        particle.style.left =
        Math.random()*100+"%";


        particle.style.top =
        Math.random()*100+"%";


        document.body
        .appendChild(particle);

    }

}



// =====================================================
// STARTUP
// =====================================================


window.addEventListener(
"load",
()=>{


    startTitle();


    createParticles();


    printTerminal(
        "EMY OS INITIALIZED..."
    );


    addActivity(
        "🟢 System Started"
    );


});

// =====================================================
// PART 2/5
// VISITOR SYSTEM + ACTIVITY FEED
// =====================================================



// =====================================================
// ACTIVITY FEED
// =====================================================


function addActivity(message){


    const feed =
    document.getElementById("activityFeed");


    if(!feed) return;



    const time =
    new Date()
    .toLocaleTimeString([],{

        hour:"2-digit",
        minute:"2-digit"

    });



    const item =
    document.createElement("div");


    item.className =
    "activity-item";



    item.innerHTML = `

        <span>
            ${time}
        </span>

        <p>
            ${message}
        </p>

    `;



    feed.prepend(item);



    while(feed.children.length > 20){

        feed.removeChild(
            feed.lastChild
        );

    }


}



// =====================================================
// LOCAL STORAGE SYSTEM
// =====================================================


function saveVisitorData(){


    localStorage.setItem(
        "emyVisitors",
        JSON.stringify({

            visits:
            EMY_OS.visitors,

            commands:
            EMY_OS.commands,

            games:
            EMY_OS.games,

            creators:
            EMY_OS.creators

        })
    );


}




function loadVisitorData(){


    const data =
    localStorage.getItem(
        "emyVisitors"
    );


    if(!data) return;


    const saved =
    JSON.parse(data);



    EMY_OS.visitors =
    saved.visits || 0;


    EMY_OS.commands =
    saved.commands || 0;


    EMY_OS.games =
    saved.games || 0;


    EMY_OS.creators =
    saved.creators || 0;


}




// =====================================================
// DASHBOARD UPDATE
// =====================================================


function updateVisitorPanel(){


    const visitors =
    document.getElementById(
        "visitCount"
    );


    const games =
    document.getElementById(
        "gamesPlayed"
    );


    const commands =
    document.getElementById(
        "commandCount"
    );


    const creators =
    document.getElementById(
        "creatorCount"
    );



    if(visitors)
    visitors.innerHTML =
    EMY_OS.visitors;



    if(games)
    games.innerHTML =
    EMY_OS.games;



    if(commands)
    commands.innerHTML =
    EMY_OS.commands;



    if(creators)
    creators.innerHTML =
    EMY_OS.creators;



}



// =====================================================
// SESSION TIMER
// =====================================================


let sessionSeconds = 0;



function updateSession(){


    const timer =
    document.getElementById(
        "sessionTimer"
    );


    if(!timer) return;



    sessionSeconds++;



    let hours =
    Math.floor(
        sessionSeconds / 3600
    );


    let minutes =
    Math.floor(
        (sessionSeconds % 3600) / 60
    );


    let seconds =
    sessionSeconds % 60;



    timer.innerHTML =

    String(hours).padStart(2,"0")
    + ":"
    +
    String(minutes).padStart(2,"0")
    + ":"
    +
    String(seconds).padStart(2,"0");



}



setInterval(
    updateSession,
    1000
);




// =====================================================
// VISITOR STARTUP
// =====================================================


function initializeVisitor(){


    loadVisitorData();



    EMY_OS.visitors++;



    saveVisitorData();



    updateVisitorPanel();



    addActivity(
        "👤 Visitor entered Emy OS"
    );


}



window.addEventListener(
"load",
()=>{

    initializeVisitor();

});

// =====================================================
// PART 3/5
// TERMINAL ENGINE + COMMAND DATABASE
// =====================================================



// =====================================================
// TERMINAL HISTORY
// =====================================================


let commandHistory = [];

let historyIndex = -1;



// =====================================================
// COMMAND DATABASE
// =====================================================


const commands = {



help(){


    printTerminal(
    "📂 Available Commands:"
    );


    printTerminal(
    "about - About Emy"
    );


    printTerminal(
    "skills - My Skills"
    );


    printTerminal(
    "projects - Projects"
    );


    printTerminal(
    "music - Emy's Soundtrack"
    );


    printTerminal(
    "whoami - Identity"
    );


    printTerminal(
    "neofetch - System Info"
    );


    printTerminal(
    "date - Current Date"
    );


    printTerminal(
    "uptime - System Runtime"
    );


    printTerminal(
    "matrix - Matrix Mode"
    );


    printTerminal(
    "hack - Hacker Simulator"
    );


    printTerminal(
    "sudo emy - Creator Access"
    );


},




about(){


    printTerminal(
    "👑 Emy - Future Web Developer & Cybersecurity Enthusiast"
    );


},




skills(){


    printTerminal(
    "💻 HTML"
    );


    printTerminal(
    "🎨 CSS"
    );


    printTerminal(
    "⚡ JavaScript"
    );


    printTerminal(
    "🔐 Cybersecurity"
    );


},




projects(){


    printTerminal(
    "🚀 My First Website"
    );


    printTerminal(
    "📚 Wikipedia Editing Journey"
    );


    printTerminal(
    "🛡 Future Cybersecurity Projects"
    );


},




music(){


    printTerminal(
    "🎧 Opening Emy's Soundtrack..."
    );


    let section =
    document.getElementById(
        "artists"
    );


    if(section){

        section.scrollIntoView({
            behavior:"smooth"
        });

    }


},




whoami(){


    printTerminal(
    "emy@portfolio"
    );


},




neofetch(){


    printTerminal(
    "🖥 EMY OS " + EMY_OS.version
    );


    printTerminal(
    "⚡ Terminal: ONLINE"
    );


    printTerminal(
    "🔐 Security: ROOT"
    );


},




date(){


    printTerminal(
    new Date()
    .toDateString()
    );


},




uptime(){


    let uptime =
    Math.floor(
        (Date.now()-websiteStartTime)
        /1000
    );


    printTerminal(
    "⏱ Uptime: "
    +
    uptime
    +
    " seconds"
    );


},




clear(){


    if(terminalOutput){

        terminalOutput.innerHTML="";

    }


}



};



// =====================================================
// TERMINAL INPUT SYSTEM
// =====================================================


function runTerminal(event){


    if(event.key !== "Enter")
    return;



    let command =
    terminalInput.value
    .toLowerCase()
    .trim();



    if(command==="")
    return;



    EMY_OS.commands++;


    commandHistory.push(command);


    historyIndex =
    -1;



    printTerminal(
    "emy@portfolio:~$ "
    +
    command
    );



    addActivity(
    "💻 Command: "
    +
    command
    );



    terminalInput.value="";



    if(commands[command]){


        commands[command]();


    }

    else{


        printTerminal(
        "❌ Command not found. Type help."
        );


    }



    saveVisitorData();

    updateVisitorPanel();



}

// =====================================================
// PART 4/5
// SPECIAL MODES + CREATOR SYSTEM
// =====================================================



// =====================================================
// MATRIX MODE
// =====================================================


function toggleMatrix(){


    EMY_OS.matrixMode =
    !EMY_OS.matrixMode;



    const matrix =
    document.getElementById(
        "matrix"
    );



    if(matrix){

        matrix.classList.toggle(
            "active"
        );

    }



    if(EMY_OS.matrixMode){


        document.body.style.background =
        "#000";


        printTerminal(
        "🟩 Matrix Mode Activated"
        );


        addActivity(
        "🟩 Matrix Mode activated"
        );


    }


    else{


        document.body.style.background =
        "#111";


        printTerminal(
        "⬜ Matrix Mode Disabled"
        );


        addActivity(
        "⬜ Matrix Mode disabled"
        );


    }


}





// =====================================================
// HACK SIMULATOR
// =====================================================


function hackSimulator(){


    printTerminal(
    "🔐 Connecting to secure server..."
    );


    setTimeout(()=>{


        printTerminal(
        "🟢 Bypassing firewall..."
        );


    },800);



    setTimeout(()=>{


        printTerminal(
        "🟢 Access granted."
        );


        addActivity(
        "🎮 Hack simulator completed"
        );


    },1600);



}




// =====================================================
// CREATOR ACCESS
// =====================================================


function creatorAccess(){


    EMY_OS.developerMode =
    true;



    EMY_OS.creators++;



    const panel =
    document.getElementById(
        "creatorPanel"
    );



    if(panel){

        panel.style.display =
        "block";

    }



    printTerminal(
    "👑 Creator Mode Enabled"
    );



    addActivity(
    "👑 Creator Mode enabled"
    );



    saveVisitorData();

    updateVisitorPanel();



}





// =====================================================
// SIMPLE GAME SYSTEM
// =====================================================


function guessGame(){


    let number =
    Math.floor(
        Math.random()*10
    )+1;



    let guess =
    prompt(
    "Guess a number between 1-10"
    );



    if(Number(guess)===number){


        printTerminal(
        "🎉 Correct!"
        );


        EMY_OS.games++;


    }


    else{


        printTerminal(
        "❌ Wrong! Number was "
        +
        number
        );


    }



    saveVisitorData();

    updateVisitorPanel();



}




// =====================================================
// ADD SPECIAL COMMANDS
// =====================================================


commands.matrix =
()=>{

    toggleMatrix();

};



commands.hack =
()=>{

    hackSimulator();

};



commands["sudo emy"] =
()=>{

    creatorAccess();

};



commands.game =
()=>{

    guessGame();

};

// =====================================================
// PART 5/5
// FINAL SYSTEM CONNECTIONS
// =====================================================



// =====================================================
// COMMAND HISTORY NAVIGATION
// =====================================================


if(terminalInput){


terminalInput.addEventListener(
"keydown",
(event)=>{


    if(event.key === "ArrowUp"){


        if(commandHistory.length===0)
        return;



        if(historyIndex < commandHistory.length-1){

            historyIndex++;

        }



        terminalInput.value =
        commandHistory[
            commandHistory.length-1-historyIndex
        ];



    }



    if(event.key === "ArrowDown"){


        if(historyIndex > 0){


            historyIndex--;


            terminalInput.value =
            commandHistory[
                commandHistory.length-1-historyIndex
            ];


        }


        else{


            historyIndex=-1;

            terminalInput.value="";


        }



    }



});


}




// =====================================================
// BOOT SCREEN
// =====================================================


async function bootSystem(){


    if(EMY_OS.booted)
    return;


    EMY_OS.booted=true;



    printTerminal(
    "🖥 Starting EMY OS..."
    );


    await delay(700);


    printTerminal(
    "🔐 Checking security..."
    );


    await delay(700);


    printTerminal(
    "⚡ Loading systems..."
    );


    await delay(700);


    printTerminal(
    "✅ System Ready"
    );


    addActivity(
    "🚀 Boot completed"
    );


}






// =====================================================
// LIVE SYSTEM MONITORS
// =====================================================



function systemMonitor(){


    const cpu =
    document.getElementById(
        "cpuStatus"
    );



    const network =
    document.getElementById(
        "networkStatus"
    );



    const cpuStates=[

        "Stable",
        "Processing...",
        "Optimizing...",
        "High Load"

    ];



    const networkStates=[

        "Connected",
        "Syncing...",
        "Secure"

    ];



    if(cpu){

        cpu.innerHTML =
        cpuStates[
            Math.floor(
            Math.random()
            *
            cpuStates.length
            )
        ];

    }



    if(network){

        network.innerHTML =
        networkStates[
            Math.floor(
            Math.random()
            *
            networkStates.length
            )
        ];

    }



}



setInterval(
systemMonitor,
8000
);





// =====================================================
// THEME BUTTON CONNECTION
// =====================================================


const themeButton =
document.getElementById(
"themeButton"
);



if(themeButton){


themeButton.addEventListener(
"click",
()=>{


    toggleTheme();


});


}




// =====================================================
// INITIALIZATION MESSAGE
// =====================================================


setTimeout(()=>{


    printTerminal(
    "Type 'help' to view commands."
    );


},2000);

window.addEventListener(
"load",
()=>{

    const boot =
    document.getElementById("bootScreen");


    if(boot){

        setTimeout(()=>{

            boot.style.display="none";

        },2500);

    }


});

// =====================================================
// CYBER LAB SYSTEM
// =====================================================



// =====================================================
// PASSWORD STRENGTH CHECKER
// =====================================================


function checkPassword(){


    const input =
    document.getElementById(
        "passwordInput"
    );


    const result =
    document.getElementById(
        "passwordResult"
    );


    if(!input || !result)
    return;



    const password =
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



    if(score <= 1){

        message =
        "🔴 Weak Password";

    }

    else if(score === 2){

        message =
        "🟡 Medium Password";

    }

    else if(score === 3){

        message =
        "🟢 Strong Password";

    }

    else{

        message =
        "💎 Excellent Password";

    }



    result.innerHTML =
    message;



    addActivity(
        "🛡 Password checked"
    );


}





// =====================================================
// HASH GENERATOR
// =====================================================


async function generateHash(){


    const input =
    document.getElementById(
        "hashInput"
    );


    const result =
    document.getElementById(
        "hashResult"
    );


    if(!input || !result)
    return;



    const text =
    input.value;



    if(!text){

        result.innerHTML =
        "Enter text first";

        return;

    }



    const data =
    new TextEncoder()
    .encode(text);



    const hashBuffer =
    await crypto.subtle.digest(
        "SHA-256",
        data
    );



    const hashArray =
    Array.from(
        new Uint8Array(hashBuffer)
    );



    const hash =
    hashArray
    .map(
        b =>
        b.toString(16)
        .padStart(2,"0")
    )
    .join("");



    result.innerHTML =
    hash;



    addActivity(
        "🔢 Hash generated"
    );


}





// =====================================================
// ENCRYPTION DEMO
// =====================================================


function encryptText(){


    const input =
    document.getElementById(
        "encryptInput"
    );


    const result =
    document.getElementById(
        "encryptResult"
    );


    if(!input || !result)
    return;



    let text =
    input.value;



    if(!text){

        result.innerHTML =
        "Enter text first";

        return;

    }



    let encrypted =
    "";



    for(
        let i = 0;
        i < text.length;
        i++
    ){

        encrypted +=
        String.fromCharCode(
            text.charCodeAt(i)+3
        );

    }



    result.innerHTML =
    encrypted;



    addActivity(
        "🔒 Encryption demo used"
    );


}

// =====================================
// CYBER SCANNER SIMULATION
// =====================================


function runCyberScan(){


const result =
document.getElementById(
"scanResult"
);


if(!result) return;



let messages = [

"🔍 Initializing scanner...",

"📡 Checking network...",

"🔓 Port 22 SSH OPEN",

"🌐 Port 80 HTTP OPEN",

"🔒 Port 443 HTTPS OPEN",

"🛡 Firewall detected",

"✅ Scan complete"

];



let i = 0;


result.innerHTML="";



function scan(){


if(i < messages.length){


let line =
document.createElement("p");


line.innerHTML =
messages[i];


result.appendChild(line);


i++;


setTimeout(scan,700);


}



else{


addActivity(
"🛰 Cyber scan completed"
);


}


}



scan();


}

// =====================================
// SECURITY DASHBOARD
// =====================================


function updateSecurityScore(){


const score =
document.getElementById(
"securityScore"
);


if(!score) return;



let security = 82;



let increase =
setInterval(()=>{


if(security >= 92){

clearInterval(increase);

return;

}



security++;


score.innerHTML =
"Overall Score: "
+ security
+ "%";


},100);



addActivity(
"🛡 Security dashboard updated"
);


}

