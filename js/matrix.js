// =========================
// EMY MATRIX MODE
// =========================
function openMatrix(){

    const matrix=document.getElementById("matrixMode");

    if(!matrix) return;

    matrix.style.display="block";

    startMatrix();

    unlockAchievement(
        "matrixWalker",
        "Enter Matrix Mode"
    );

}





function closeMatrix(){

const matrix=document.getElementById("matrixMode");

if(!matrix) return;


matrix.style.display="none";


}



function startMatrix(){


const canvas=document.getElementById("matrixCanvas");

const ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


const letters="01ABCDEFGHIJKLMNOPQRSTUVWXYZ";


const fontSize=18;


const columns=
canvas.width/fontSize;


const drops=[];


for(let i=0;i<columns;i++){

drops[i]=1;

}



function draw(){


ctx.fillStyle="rgba(0,0,0,0.08)";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);



ctx.fillStyle="#00ff41";

ctx.font=
fontSize+"px monospace";



for(let i=0;i<drops.length;i++){


const text=
letters[
Math.floor(Math.random()*letters.length)
];



ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);



if(
drops[i]*fontSize >
canvas.height &&
Math.random()>0.975
){

drops[i]=0;

}


drops[i]++;

}


}



setInterval(draw,50);


}