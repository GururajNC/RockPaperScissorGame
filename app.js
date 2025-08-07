let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");

let your_score=document.querySelector("#your-score");
let comp_score=document.querySelector("#comp-score");


let gencomp=()=>{
    let option=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
}

let playgame=(userchoice)=>{
    console.log("user choice = "+ userchoice)
    const compchoice=gencomp();
    console.log("computer choice = "+ compchoice);


let drawgame=()=>{
    console.log ("game draw");
    msg.innerText="Game draw!"
    msg.style.backgroundColor="blue";
}

    if (userchoice===compchoice){
        //draw
        drawgame();
    }else{
        let userwin=true;
        if (userchoice==="paper"){
            //rock, scissor
            userwin=compchoice==="rock"?true:false;
        }
        else if(userchoice==="rock"){
            //paper, scissor
            userwin=compchoice==="scissor"?true:false;
        }
        else {
            //paper,rock
            userwin=compchoice==="paper"?true:false;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

let showwinner=(userwin,userchoice,compchoice)=>{
    if (userwin){
        console.log(`you won `);
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        console.log("user"+userscore)
        your_score.innerText = userscore;

    }else{
        console.log(`you loose`);
        msg.innerText = `You loose! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="red";
        compscore++;
        console.log("comp"+compscore)
        comp_score.innerText=compscore;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
            const userchoice=choice.getAttribute("id");
            playgame(userchoice);
        }
    )
});




