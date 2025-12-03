let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rst");
let NewGamebtn=document.querySelector("#New");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg-container");
let drawmsg=document.querySelector(".draw-msg");


let turnO=true;

const WINPATT = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked.");
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       CheckWinner();
    })
})

const  showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const resetgame =()=>{
    turnO=true;
    NewGame();
    msgcontainer.classList.add("hide");
    drawmsg.classList.add("hide1");
}

const endgame = () => {
  boxes.forEach(b => {
    b.disabled = true;
  });
};

const NewGame = () => {
  boxes.forEach(b => {
    b.disabled = false;
    b.innerText="";
    counter=0;
  });
};
const CheckWinner=()=>{
for(let pattern of WINPATT){
    let pos1= boxes[pattern[0]].innerText;
    let pos2= boxes[pattern[1]].innerText;
    let pos3= boxes[pattern[2]].innerText;

    if(pos1 !="" && pos2 !="" && pos3 !=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("Winner",pos1);
            showWinner(pos1);
            endgame();
        }
    }
}
}

NewGamebtn.addEventListener("click",resetgame);

rstbtn.addEventListener("click",resetgame);

let counter=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        counter++;
        if(counter===9){
            drawmsg.classList.remove("hide1");

        }
    })
})