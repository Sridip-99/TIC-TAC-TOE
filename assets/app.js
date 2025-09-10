//  Theme logic
const theme = document.querySelector("#theme");
const themeIcon = document.querySelector("#theme-icon");
let dark = true;
theme.addEventListener("click", () => {
    // Theme mode change logic here
    if(dark == true){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        dark = false;
    }else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        dark = true;
    }
});

//  GAME logic
const scoreWindow = document.querySelector("#container1");
const gameWindow = document.querySelector("#container2");
const boxes = document.querySelectorAll(".box");
const newBtn = document.querySelector("#new-btn");
const rstBtn = document.querySelector("#rst-btn");
const msg = document.querySelector("#winner");

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const winner = (pos1)=>{
    scoreWindow.classList.remove("hide");
    gameWindow.classList.add("hide");
    msg.innerText = pos1;
}

const checkWinner = ()=>{
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                winner(pos1);
            }
        }
    }
}

let userO = true;
boxes.forEach(box =>{
    box.addEventListener("click", ()=>{
        if(userO){
            box.innerText = "O";
            box.style.color = "#f0f0f0";
            box.style.backgroundColor = "#ff4545ff";
            userO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#00032c";
            box.style.backgroundColor = "#4ee420ff";
            userO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const boxEnable = ()=>{
    userO = true;
    boxes.forEach(box =>{
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "#65b2ff";
    });
}

newBtn.addEventListener("click", ()=> {
    scoreWindow.classList.add("hide");
    gameWindow.classList.remove("hide");
    boxEnable();
});
rstBtn.addEventListener("click", ()=> {
    boxEnable();
});
