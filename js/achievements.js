
// =======================================
// ACHIEVEMENT SYSTEM
// =======================================

const unlockedAchievements = new Set(

    Storage.load(
        "achievements",
        []
    )

);


function unlockAchievement(id) {

    const achievement = achievements[id];

    if (!achievement) return;


    const unlocked =
        JSON.parse(
            localStorage.getItem("achievements")
        ) || [];


    if (unlocked.includes(id)) {

        const count =
            document.getElementById("achievementCount");

        if (count) {
            count.textContent = unlocked.length;
        }

        return;
    }


    unlocked.push(id);


    localStorage.setItem(
        "achievements",
        JSON.stringify(unlocked)
    );


    // UPDATE PROFILE ACHIEVEMENT COUNT

    if (typeof emyProfile !== "undefined") {

        emyProfile.achievements =
            unlocked.length;

        saveProfile();

    }


    // UPDATE ACHIEVEMENT COUNT ON SCREEN

    const count =
        document.getElementById("achievementCount");

    if (count) {

        count.textContent =
            unlocked.length;

    }


    // UPDATE PROFILE WINDOW

    if (typeof updateProfile === "function") {

        updateProfile();

    }


    // SHOW ACHIEVEMENT POPUP

    if (typeof showAchievementNotification === "function") {

        showAchievementNotification(
            achievement
        );

    }


    // REFRESH ACHIEVEMENT WINDOW

    if (typeof updateAchievements === "function") {

        updateAchievements();

    }

}

function openWindow(id){

    const win = document.getElementById(id);

    if(!win) return;

    win.style.display = "block";

    win.style.zIndex = Date.now();

    const running =
    document.getElementById("runningApps");

    if(running){

        const exists =
        document.getElementById("app-" + id);

        if(!exists){

            const app =
            document.createElement("div");

            app.className =
            "running-app";

            app.id =
            "app-" + id;

            app.innerHTML =
            id
            .replace("Window","")
            .replace(/([A-Z])/g," $1")
            .trim();

            app.onclick = ()=>{

                win.style.display = "block";

                win.style.zIndex =
                Date.now();

            };

            running.appendChild(app);

        }

    }

}


function closeWindow(id){

    const win = document.getElementById(id);

    if(!win) return;

    win.style.display = "none";

}