// =======================================
// DEVELOPER MODE
// =======================================

let developerUnlocked = false;

function unlockDeveloperMode(){

if(developerUnlocked) return;

developerUnlocked = true;


const panel = get("developerPanel");

if(panel){

panel.style.display = "block";

panel.scrollIntoView({

behavior:"smooth"

});

}

addActivity("👑 Developer Mode Unlocked");

}
