
// =======================================
// ACHIEVEMENT SYSTEM
// =======================================

const unlockedAchievements = new Set(

Storage.load(

"achievements",

[]

)

);

function unlockAchievement(title,description){

const key = title;

if(unlockedAchievements.has(key)) return;

unlockedAchievements.add(key);

Storage.save(

"achievements",

[...unlockedAchievements]

);

const popup = get("achievementPopup");

const heading = get("achievementTitle");

const text = get("achievementDescription");

if(!popup || !heading || !text) return;

heading.innerHTML = title;

text.innerHTML = description;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},3500);

}

function openWindow(id){

const win=document.getElementById(id);

if(!win) return;

win.style.display="block";

win.style.zIndex=Date.now();

const running=document.getElementById("runningApps");

if(running){

const exists=document.getElementById("app-"+id);

if(!exists){

const app=document.createElement("div");

app.className="running-app";

app.id="app-"+id;

app.innerHTML=id

.replace("Window","")

.replace(/([A-Z])/g," $1")

.trim();

app.onclick=()=>{

win.style.display="block";

win.style.zIndex=Date.now();

};

running.appendChild(app);

}

}

}

function closeWindow(id){

const win=document.getElementById(id);

if(win){

win.style.display="none";

}

const app=document.getElementById("app-"+id);

if(app){

app.remove();

}

}

Storage.save(

"achievements",

[...unlockedAchievements]

);

unlockAchievement(

"🏆 First Contact",

"Welcome to Emy's World."

);

unlockAchievement(

"🖥 System Operator",

"Activated the Live Hacker Dashboard."

);

unlockAchievement(

"🌍 Global Observer",

"Opened the Live Attack Map."

);

unlockAchievement(

"🤖 Curious Mind",

"Started a conversation with EMY AI."

);

unlockAchievement(

"👑 Elite Hacker",

"Unlocked Developer Mode."

);