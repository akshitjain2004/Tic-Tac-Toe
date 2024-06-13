let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rst-btn");
let newbtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO  = true;

const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6] // Diagonal
];


const resetGame = () =>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBox =()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}

const enableBox =()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations. Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msgContainer.style.fontWeight = "bold"; // Add style to the font
    msgContainer.style.color = "yellow"; // Set the font color to yellow
    msgContainer.style.fontWeight= 10;
    disableBox();
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1!=0&&val2!=0&&val3!=0){
        if(val1==val2 && val2==val3){
        showWinner(val1);
        }
    }
    }
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
