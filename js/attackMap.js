// =======================================
// LIVE CYBER ATTACK MAP
// =======================================

function startAttackMap(){

const log = get("attackLog");

if(!log) return;


const countries=[

"USA",
"China",
"Russia",
"Germany",
"France",
"Nigeria",
"Brazil",
"Japan",
"United Kingdom",
"Canada"

];

const actions=[

"Firewall blocked intrusion",

"DDoS attack detected",

"Brute-force attempt stopped",

"Malware signature detected",

"Suspicious login blocked",

"Port scan intercepted",

"Encryption verified",

"Threat neutralized"

];

setInterval(()=>{

const from =
countries[
Math.floor(Math.random()*countries.length)
];

const to =
countries[
Math.floor(Math.random()*countries.length)
];

const action =
actions[
Math.floor(Math.random()*actions.length)
];

const line =
document.createElement("p");

line.innerHTML =
"⚠ "+from+
" → "+
to+
"<br>✔ "+action;

log.prepend(line);

while(log.children.length>10){

log.removeChild(log.lastChild);

}

},2200);

}

window.addEventListener("load",()=>{

startAttackMap();

});
