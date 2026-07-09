// =========================
// EMY'S WORLD SCRIPT
// PART 1 - CORE SYSTEMS
// =========================


// =========================
// GLOBAL VARIABLES
// =========================

let darkMode = true;

let developerMode = false;

let matrixMode = false;

// =========================
// VISITOR INTELLIGENCE
// =========================

let visitCount = 0;

let gamesPlayed = 0;

let commandCount = 0;

let creatorCount = 0;


// =========================
// TYPEWRITER TITLE
// =========================

const title = document.getElementById("title");

const titleText = "Welcome to Emy's World";

let titleIndex = 0;


function typeWriter(){

    if(!title) return;


    if(titleIndex < titleText.length){

        title.innerHTML += titleText.charAt(titleIndex);

        titleIndex++;

        setTimeout(typeWriter,80);

    }

}



// =========================
// THEME SYSTEM
// =========================


function changeTheme(){

    const button =
    document.getElementById("themeButton");


    if(darkMode){

        document.body.style.background="#ffffff";

        document.body.style.color="#111";


        if(button){

            button.innerHTML="🌙 Dark Mode";

        }


    }else{


        document.body.style.background="#111";

        document.body.style.color="cyan";


        if(button){

            button.innerHTML="☀️ Light Mode";

        }

    }


    darkMode = !darkMode;

}



// =========================
// SCROLL TO TOP
// =========================


const topBtn =
document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(!topBtn) return;


    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }


});



function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



// =========================
// START WEBSITE
// =========================


window.onload = ()=>{


    if(title){

        title.innerHTML="";

        titleIndex=0;

        typeWriter();

    }

    loadVisitorData();

visitCount++;

saveVisitorData();

updateVisitorPanel();

addActivity("👤 Visitor entered website");


};



// =========================
// PARTICLE BACKGROUND
// =========================


const canvas =
document.getElementById("particles");


if(canvas){


const ctx =
canvas.getContext("2d");


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



let particles=[];



for(let i=0;i<80;i++){


    particles.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        size:Math.random()*3,

        speed:Math.random()*1

    });


}



function animateParticles(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle="cyan";


    particles.forEach(p=>{


        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
        );

        ctx.fill();



        p.y -= p.speed;



        if(p.y<0){

            p.y=canvas.height;

        }


    });



    requestAnimationFrame(
        animateParticles
    );


}



animateParticles();



window.addEventListener(
"resize",
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

});


}

// =========================
// PART 2 - DEVELOPER TERMINAL
// =========================


const output =
document.getElementById("terminalOutput");

const terminalInput =
document.getElementById("terminalInput");



function printTerminal(message){

    if(!output) return;


    let line =
    document.createElement("p");


    line.innerHTML = message;


    output.appendChild(line);


    output.scrollTop =
    output.scrollHeight;

}



// =========================
// TERMINAL COMMAND SYSTEM
// =========================


function runTerminal(event){


    if(event.key !== "Enter") return;

    commandCount++;

    addActivity("👑 Creator Mode enabled");

saveVisitorData();

updateVisitorPanel();


    let command =
    terminalInput.value
    .toLowerCase()
    .trim();



    printTerminal(
    "emy@portfolio:~$ " + command
    );


    terminalInput.value="";



    if(command==="help"){


        printTerminal(
        "Commands:"
        );


        printTerminal(
        "matrix - Toggle Matrix Mode"
        );


        printTerminal(
        "hack - Hollywood Hacker Simulator"
        );


        printTerminal(
        "sudo emy - Creator Access"
        );
    
        addActivity("👑 Creator Mode enabled");


        printTerminal(
        "clear - Clear terminal"
        );


    }



    else if(command==="clear"){


        output.innerHTML="";


    }



    else if(command==="matrix"){


        toggleMatrix();


    }



    else if(command==="hack"){


        runHack();


    }



    else if(command==="sudo emy"){


        sudoEmy();


    }



    else{


        printTerminal(
        "❌ Command not found. Type help."
        );


    }


}




// =========================
// MATRIX MODE
// =========================


function toggleMatrix(){


    matrixMode =
    !matrixMode;



    if(matrixMode){


        document.body.style.background="#000";


        printTerminal(
        "💚 Matrix Mode Activated."
        );


    }else{


        document.body.style.background="#111";


        printTerminal(
        "🤍 Matrix Mode Disabled."
        );


    }


}



// =========================
// HOLLYWOOD HACKER SIMULATOR
// =========================


function runHack(){


    let steps=[


    "🔗 Connecting to secure server...",


    "✔ Connection established.",


    "🔍 Scanning network ports...",


    "✔ 48 ports discovered.",


    "🔥 Bypassing firewall...",


    "██████████ 100%",


    "🔐 Encrypting security layers...",


    "💾 Accessing database...",


    "⚡ Injecting virtual payload...",


    "📂 Downloading files...",


    "██████████ 100%",


    "🚨 ACCESS GRANTED",


    "👨‍💻 Welcome Agent Emy."


    ];



    let i=0;



    function nextStep(){


        if(i < steps.length){


            printTerminal(
            steps[i]
            );


            i++;


            setTimeout(
            nextStep,
            700
            );


        }


    }



    nextStep();


}



// =========================
// SECRET CREATOR ACCESS
// =========================


function sudoEmy(){



    printTerminal(
    "🔐 Checking permissions..."
    );


    setTimeout(()=>{


        printTerminal(
        "👤 User detected: Emy"
        );


    },600);



    setTimeout(()=>{


        printTerminal(
        "🛡️ Access Level: ROOT"
        );


    },1200);



    setTimeout(()=>{


        printTerminal(
        "⚡ Developer Mode: ENABLED"
        );


        developerMode=true;

        creatorCount++;

saveVisitorData();

updateVisitorPanel();



    },1800);



    setTimeout(()=>{


        printTerminal(
        "👑 Welcome, Creator."
        );



        let panel =
        document.getElementById(
        "creatorPanel"
        );



        if(panel){


            panel.style.display="block";


        }



    },2400);



}

// =========================
// PART 3 - GAMES HUB
// =========================


// =========================
// GAME VARIABLES
// =========================


let secretNumber =
Math.floor(Math.random()*10)+1;


let score = 0;

let bestScore = 0;

let attempts = 5;



// =========================
// LOAD PROJECTS
// =========================


function loadProject(type){

    gamesPlayed++;

    addActivity("🎮 Opened: " + type);

saveVisitorData();

updateVisitorPanel();


    const app =
    document.getElementById("appArea");



    if(!app) return;



    // =====================
    // GUESS GAME
    // =====================


    if(type==="guess"){


        app.innerHTML = `


        <h2>🎯 Guess The Number</h2>


        <p>
        Guess a number between 1 - 10
        </p>


        <p>
        🏆 Score:
        <span id="score">
        ${score}
        </span>
        </p>


        <p>
        ❤️ Attempts:
        <span id="attempts">
        ${attempts}
        </span>
        </p>


        <p>
        🥇 Best Score:
        <span id="bestScore">
        ${bestScore}
        </span>
        </p>



        <input 
        id="guessInput"
        type="number"
        min="1"
        max="10">



        <br><br>


        <button onclick="playGuess()">
        Guess
        </button>



        <button onclick="restartGuess()">
        Restart
        </button>



        <p id="guessResult"></p>


        `;


    }



    // =====================
    // ROCK PAPER SCISSORS
    // =====================


    if(type==="rps"){


        app.innerHTML = `


        <h2>✂️ Rock Paper Scissors</h2>


        <p>
        Choose your move:
        </p>


        <button onclick="playRPS('rock')">
        🪨 Rock
        </button>


        <button onclick="playRPS('paper')">
        📄 Paper
        </button>


        <button onclick="playRPS('scissors')">
        ✂️ Scissors
        </button>


        <p id="rpsResult"></p>


        `;


    }


}




// =========================
// GUESS GAME LOGIC
// =========================


function playGuess(){



    const input =
    document.getElementById(
    "guessInput"
    );



    const result =
    document.getElementById(
    "guessResult"
    );



    if(!input || !result)
    return;



    let guess =
    Number(input.value);



    if(!guess){


        result.innerHTML =
        "⚠️ Enter a number.";


        return;


    }



    if(guess===secretNumber){



        score++;



        if(score>bestScore){

            bestScore=score;

        }



        result.innerHTML =
        "🎉 Correct! New number generated.";



        secretNumber =
        Math.floor(Math.random()*10)+1;



        attempts=5;



    }



    else{


        attempts--;



        if(guess < secretNumber){


            result.innerHTML =
            "📉 Too low!";


        }else{


            result.innerHTML =
            "📈 Too high!";


        }



        if(attempts<=0){


            result.innerHTML =
            "💀 Game Over! Number was "
            + secretNumber;



            attempts=5;


            secretNumber =
            Math.floor(Math.random()*10)+1;


        }


    }



    updateGameStats();


}




function restartGuess(){



    score=0;

    attempts=5;


    secretNumber =
    Math.floor(Math.random()*10)+1;



    updateGameStats();



    const result =
    document.getElementById(
    "guessResult"
    );


    if(result){

        result.innerHTML =
        "🔄 Game restarted.";

    }


}




function updateGameStats(){


    let scoreBox =
    document.getElementById("score");


    let attemptBox =
    document.getElementById("attempts");


    let bestBox =
    document.getElementById("bestScore");



    if(scoreBox)
    scoreBox.innerHTML=score;


    if(attemptBox)
    attemptBox.innerHTML=attempts;


    if(bestBox)
    bestBox.innerHTML=bestScore;


}




// =========================
// ROCK PAPER SCISSORS
// =========================


function playRPS(player){


    let choices=[

        "rock",

        "paper",

        "scissors"

    ];



    let computer =
    choices[
    Math.floor(Math.random()*3)
    ];



    let result =
    document.getElementById(
    "rpsResult"
    );



    let message="";



    if(player===computer){


        message =
        "🤝 Draw! Computer chose "
        + computer;


    }


    else if(

        (player==="rock" && computer==="scissors") ||

        (player==="paper" && computer==="rock") ||

        (player==="scissors" && computer==="paper")

    ){


        message =
        "🏆 You win! Computer chose "
        + computer;


    }


    else{


        message =
        "💀 You lose! Computer chose "
        + computer;


    }



    if(result){

        result.innerHTML =
        message;

    }


}

// =========================
// PART 4 - CREATOR PANEL
// =========================



// =========================
// SYSTEM DIAGNOSTICS
// =========================


function runDiagnostics(){


    if(typeof printTerminal !== "function")
    return;



    printTerminal(
    "🔍 Running system diagnostics..."
    );



    setTimeout(()=>{

        printTerminal(
        "✔ HTML System: ONLINE"
        );

    },500);



    setTimeout(()=>{

        printTerminal(
        "✔ CSS System: ONLINE"
        );

    },1000);



    setTimeout(()=>{

        printTerminal(
        "✔ JavaScript System: ONLINE"
        );

    },1500);



    setTimeout(()=>{

        printTerminal(
        "✔ Terminal System: ONLINE"
        );

    },2000);



    setTimeout(()=>{

        printTerminal(
        "🟢 All systems healthy."
        );

    },2500);


}



// =========================
// CREATOR GAME MASTER
// =========================



function revealNumber(){


    if(!developerMode){


        return;


    }



    printTerminal(

    "🎯 Creator Override: Secret Number is "
    + secretNumber

    );


}




function addWin(){


    score++;



    if(score > bestScore){


        bestScore = score;


    }

    addActivity("🏆 Creator added a win");



    updateGameStats();



    printTerminal(

    "🏆 Creator added a win."

    );


}




function resetGameScore(){


    score=0;

    bestScore=0;

    attempts=5;



    updateGameStats();



    printTerminal(

    "🔄 Game statistics reset."

    );


}




// =========================
// CREATOR PANEL MATRIX CONTROL
// =========================


function creatorMatrix(){


    toggleMatrix();



}



// =========================
// SECRET DEVELOPER COMMANDS
// =========================


function developerCommand(command){


    if(command==="developer"){


        if(developerMode){


            let panel =
            document.getElementById(
            "creatorPanel"
            );


            if(panel){

                panel.style.display="block";

            }



            printTerminal(
            "👑 Creator Panel Unlocked."
            );



        }else{


            printTerminal(
            "❌ Access denied."
            );


        }


    }


}

// =========================
// LIVE SYSTEM MONITOR
// =========================

let sessionSeconds = 0;

setInterval(() => {

    sessionSeconds++;

    let hours = Math.floor(sessionSeconds / 3600);

    let minutes = Math.floor((sessionSeconds % 3600) / 60);

    let seconds = sessionSeconds % 60;

    hours = String(hours).padStart(2,"0");

    minutes = String(minutes).padStart(2,"0");

    seconds = String(seconds).padStart(2,"0");

    const timer =
    document.getElementById("sessionTimer");

    if(timer){

        timer.innerHTML =
        `${hours}:${minutes}:${seconds}`;

    }

},1000);



// Fake CPU monitor

setInterval(()=>{

    const cpu =
    document.getElementById("cpuStatus");

    if(!cpu) return;

    const states=[

        "Stable",

        "Normal",

        "Optimal"

    ];

    cpu.innerHTML =

    states[Math.floor(Math.random()*states.length)];

},4000);



// Fake Network monitor

setInterval(()=>{

    const network =
    document.getElementById("networkStatus");

    if(!network) return;

    network.innerHTML="Connected";

},5000);

// =========================
// VISITOR DATA STORAGE
// =========================

function loadVisitorData(){

    visitCount =
    Number(localStorage.getItem("visitCount")) || 0;

    gamesPlayed =
    Number(localStorage.getItem("gamesPlayed")) || 0;

    commandCount =
    Number(localStorage.getItem("commandCount")) || 0;

    creatorCount =
    Number(localStorage.getItem("creatorCount")) || 0;

}

function saveVisitorData(){

    localStorage.setItem("visitCount",visitCount);

    localStorage.setItem("gamesPlayed",gamesPlayed);

    localStorage.setItem("commandCount",commandCount);

    localStorage.setItem("creatorCount",creatorCount);

}

function updateVisitorPanel(){

    const visit =
    document.getElementById("visitCount");

    const games =
    document.getElementById("gamesPlayed");

    const commands =
    document.getElementById("commandCount");

    const creator =
    document.getElementById("creatorCount");

    if(visit) visit.innerHTML = visitCount;

    if(games) games.innerHTML = gamesPlayed;

    if(commands) commands.innerHTML = commandCount;

    if(creator) creator.innerHTML = creatorCount;

}

// =========================
// LIVE ACTIVITY LOG
// =========================

function addActivity(message){

    const log =
    document.getElementById("activityLog");

    if(!log) return;

    const now = new Date();

    const time =
    now.toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

    });

    const line =
    document.createElement("p");

    line.innerHTML =
    time + " — " + message;

    log.prepend(line);

}