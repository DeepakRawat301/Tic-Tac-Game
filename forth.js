// Ninth class
// tic tac toe game


let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#r1');
let newGameBtn=document.querySelector('#r2');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let turnO=true;     // this variable will check that which player has turn
const winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame= () => {
    turnO=true;          // after reset again turn of O will be true
    enableBoxes();        // function call
    msgContainer.classList.add('hide');    // and it will hide winner message again
}

boxes.forEach( (box) => {
   box.addEventListener('click',() => {
    //console.log('box is clicked');
    if(turnO) {             // this means if turn of O is true 
        box.innerText='O';    // then inner text of box will be O
        turnO=false;           // and after that turn O will be false 
    }
    else {
        box.innerText='X';       // after that inner text of another box will be X
        turnO=true;               // and after that again turn of O will be true
    }
         // so above is the logic to print  X and O alternatively on diff boxes 

    box.disabled=true;  // if we click a box once it will print X or O but if we click more then one time so it will be freeze untill game ends

    checkWinner();   // here it will check for winner another function call
   })
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled=true;        // after game ends all boxes will be disabled means we cant play further till next call
    }
}

const enableBoxes = () => {
    for(let box of boxes) {   
        box.disabled=false;   //by this we can again put values in boxes
        box.innerText="";      // and all previous content from boxes will be empty
    }
}

const showWinner = (winner) => {
     msg.innerText = `Congratulation, Winner is ${winner}`;
     msgContainer.classList.remove('hide');     // this will unhide content from msg container
     disableBoxes();
}

const checkWinner = () => {
    for( let pattern of winPattern) {
       /* console.log(pattern);
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
             boxes[pattern[0]].innerText,
             boxes[pattern[1]].innerText, 
             boxes[pattern[2]].innerText
            );*/
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                //console.log('winner' , pos1Val);

                showWinner(pos1Val);
            }
        }
    }
};


//adding action listener to buttons

newGameBtn.addEventListener('click',resetGame);    
resetbtn.addEventListener('click',resetGame);

