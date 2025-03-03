let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turn0 = true;

const winpatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked")
        if (turn0) {
            box.innerText = "o";
            turn0=false;
        }
        else {
            box.innerText = "x"
            turn0=true;
        }
        box.disabled=true;
        checkwinner();

    });
})
const boxdisabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const boxenabled=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    boxdisabled();


}

const checkwinner = () => {
    for( let pattern of winpatterns){
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                //console.log("winner",pos1val);
                showwinner(pos1val);
            }

        }
        

    }
     
};

const resetgame=()=>{
    turn0=true;
    boxenabled();
    msgcontainer.classList.add("hide");


}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click", resetgame);