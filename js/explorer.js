// =====================================
// EMY FILE EXPLORER
// =====================================


const explorerData = {

root:[

{
name:"About Me",
icon:"👤",
type:"folder"
},

{
name:"Projects",
icon:"📂",
type:"folder"
},

{
name:"Cyber Lab",
icon:"🛡️",
type:"folder"
},

{
name:"Music",
icon:"🎵",
type:"folder"
},

{
name:"Images",
icon:"🖼️",
type:"folder"
},

{
name:"Secret Files",
icon:"🔒",
type:"folder"
}

],



"About Me":[

{
name:"Profile.txt",
icon:"📄",
type:"file"
},

{
name:"Skills.txt",
icon:"📄",
type:"file"
}

],



Projects:[

{
name:"My First Website",
icon:"🌐",
type:"file"
},

{
name:"Cyber Dashboard",
icon:"📊",
type:"file"
},

{
name:"Wikipedia Journey",
icon:"📝",
type:"file"
},

{
name:"Future Projects",
icon:"🚀",
type:"file"
}

],



"Cyber Lab":[

{
name:"Password Analyzer",
icon:"🔑",
type:"file"
},

{
name:"Hash Generator",
icon:"🔢",
type:"file"
},

{
name:"Network Scanner",
icon:"🌐",
type:"file"
}

],



Music:[

{
name:"Favorite Artists",
icon:"🎧",
type:"file"
},

{
name:"Playlist",
icon:"🎶",
type:"file"
}

],



Images:[

{
name:"Profile Photo",
icon:"📸",
type:"file"
}

],



"Secret Files":[

{
name:"classified.txt",
icon:"🔒",
type:"file"
}

]


};

// =====================================
// FILE CONTENT DATABASE
// =====================================

const fileContents = {

    "Profile.txt":`

<h2>PROFILE.TXT</h2>

<br>

<b>Name:</b> Emy

<br><br>

<b>Role:</b>
Future Web Developer

<br><br>

<b>Focus:</b>
Cybersecurity Enthusiast

<br><br>

<b>Mission:</b>
Build websites, apps and security tools.

`,


"Skills.txt":`

<h2>SKILLS.TXT</h2>

<br>

HTML ⭐⭐⭐⭐⭐

<br>
CSS ⭐⭐⭐⭐⭐

<br>
JavaScript ⭐⭐⭐⭐

<br>
Cybersecurity ⭐⭐⭐

`,


"My First Website":`

<h2>PROJECT FILE</h2>

<br>

Project:
My First Website

<br><br>

Status:
Completed ✅

<br><br>

Built with:
HTML + CSS + JavaScript

`,


"classified.txt":`

<h2>🔒 CLASSIFIED FILE</h2>

<br>

ACCESS LEVEL:
CREATOR ONLY 👑

<br><br>

Warning:
Sensitive information detected.
`,

"Password Analyzer":`

<h2>🔑 PASSWORD ANALYZER</h2>

<br>

Security module:

ONLINE ✅

<br><br>

Checks password strength and security.

`,



"Hash Generator":`

<h2>🔢 HASH GENERATOR</h2>

<br>

Encryption module:

ONLINE ✅

<br><br>

Generates SHA-256 hashes.

`,



"Network Scanner":`

<h2>🌐 NETWORK SCANNER</h2>

<br>

Scanner status:

READY ✅

<br><br>

Detects network information and open services.

`,
"Password Analyzer":`

<h2>🔑 PASSWORD ANALYZER</h2>

<br>

<b>Status:</b> ONLINE 🟢

<br><br>

This tool checks the strength of passwords.

<br><br>

Features:

<ul>
<li>✔ Length Check</li>
<li>✔ Uppercase Detection</li>
<li>✔ Lowercase Detection</li>
<li>✔ Number Detection</li>
<li>✔ Symbol Detection</li>
</ul>

<br>

Future Update:
Live password strength meter.

`,

"Hash Generator":`

<h2>🔢 HASH GENERATOR</h2>

<br>

<b>Status:</b> READY 🟢

<br><br>

Supported Algorithms:

<ul>
<li>SHA-256</li>
<li>SHA-512</li>
<li>MD5 (Demo Only)</li>
</ul>

<br>

Future Update:
Generate real hashes from user input.

`,

"Network Scanner":`

<h2>🌐 NETWORK SCANNER</h2>

<br>

<b>Status:</b> STANDBY 🟢

<br><br>

Capabilities:

<ul>
<li>Detect connected devices</li>
<li>Display IP addresses</li>
<li>Network latency monitor</li>
<li>Security scan simulation</li>
</ul>

<br>

Future Update:
Interactive live scanner.

`,


};

function openFile(fileName){


const viewer =
document.getElementById("fileViewerContent");


if(!viewer) return;



viewer.innerHTML =
fileContents[fileName] ||
`
<h2>${fileName}</h2>

<br>

No preview available.

`;



openWindow("fileViewerWindow");


}






// =====================================
// LOAD EXPLORER
// =====================================


function loadExplorer(folder="root"){


const list=document.getElementById("explorerList");


if(!list) return;



list.innerHTML="";



const items=explorerData[folder];



if(!items) return;




items.forEach(item=>{


const row=document.createElement("div");



row.className="explorer-item";



row.innerHTML=`

<span>${item.icon}</span>

<span>${item.name}</span>

`;




// CLICK SELECTION

row.onclick=()=>{


document
.querySelectorAll(".explorer-item")
.forEach(i=>{

i.style.background="";

i.style.color="white";

});


row.style.background="cyan";

row.style.color="black";


};




// OPEN FOLDER

row.ondblclick=()=>{


if(item.type==="folder"){

loadExplorer(item.name);

}


else if(item.type==="file"){

openFile(item.name);

}


};



list.appendChild(row);



});


}





// =====================================
// OPEN EXPLORER
// =====================================


function openExplorer(){


openWindow("explorerWindow");


loadExplorer();


}
