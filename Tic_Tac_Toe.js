let box=document.querySelectorAll(".box");
let boxes=document.getElementById("boxes");
let player1="cross";
let Computer="zero";
let click=0;
let signal=false;
const boxIndexes = [];
let index=0;
let ind=0;
let signalForComInp=false;
let win=false;
let userInp=false;
let result=document.getElementById("result");
let winner;
let clickAudio= new Audio("mixkit-video-game-mystery-alert-234.wav");
let winAudio= new Audio("mixkit-animated-small-group-applause-523.wav");
let losekAudio= new Audio("success-fanfare-trumpets-6185.mp3");
let drawAudio= new Audio("080047_lose_funny_retro_video-game-80925.mp3");
let replaySound= new Audio("mixkit-cool-interface-click-tone-2568.wav");
let existInBoxIndexe;
let cpuDemo;
let signalForComWin=false;
let signalForLeftelm=true;


const arrayForCheckRepeatElm=[];
count=0;
let signalForRepeatElement=false;
const arrForComInp=[];//array for store randomnumbers.

function Check(boxNumber){
    signalForRepeatElement=false;
    for(let i=0;i<arrayForCheckRepeatElm.length;i++){
        if(boxNumber==arrayForCheckRepeatElm[i]){
            signalForRepeatElement=true;
        }
    }
    if(signalForRepeatElement==false){
    arrayForCheckRepeatElm[count]=boxNumber;
    count+=1;
    click+=1;
    win=false;
    signal=false;
    signalForComInp=false;
     //arrForComInp[ind]=boxNumber;  
    //ind+=1;
    if(win==false && userInp==false){
    X(boxNumber,player1,boxIndexes,arrForComInp);
    clickAudio.play();
    logic();
}

    if(click<5 && win==false){
    O(boxNumber,Computer,boxIndexes,arrForComInp);
}
    }
    
}
function X(boxNumber,Player,boxIndexes,arrForComInp){
    for(let i=0;i<boxIndexes.length;i++){
        if(boxNumber==boxIndexes[i]){
            signal=true;
        }
    }
    if(Player=="cross" && signal==false){
        boxIndexes[index]=boxNumber;
        index+=1;
        box[boxNumber].innerHTML='<span class="sky">X</span>';
    
    }
    else if(Player=="zero" && signal==false){
        boxIndexes[index]=boxNumber;
        index+=1;
        setTimeout(() => {
        box[boxNumber].innerHTML='<span class="red">O</span>';
        }, 1000); 
       /* for(let j=0;j<9;j++){
            console.log(box[j].innerHTML)
        }*/
        arrayForCheckRepeatElm[count]=boxNumber;
        count+=1;
        setTimeout(logic,1000)
        console.log(arrayForCheckRepeatElm)
        //logic(); 
    }
    else if(signal==true){
        O(boxNumber,Player,boxIndexes,arrForComInp)
    }
}
function logic(){
    if(box[0].innerHTML=='<span class="sky">X</span>' && box[4].innerHTML=='<span class="sky">X</span>' && box[8].innerHTML=='<span class="sky">X</span>'){
        a=0
        b=4
        c=8
        winner="X";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[0].innerHTML=='<span class="red">O</span>' && box[4].innerHTML=='<span class="red">O</span>' && box[8].innerHTML=='<span class="red">O</span>'){
        a=0
        b=4
        c=8
        winner="O";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[2].innerHTML=='<span class="sky">X</span>' && box[4].innerHTML=='<span class="sky">X</span>' && box[6].innerHTML=='<span class="sky">X</span>'){
        a=2
        b=4
        c=6
        
        winner="X";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[2].innerHTML=='<span class="red">O</span>' && box[4].innerHTML=='<span class="red">O</span>' && box[6].innerHTML=='<span class="red">O</span>'){
        a=2
        b=4
        c=6
        
        winner="O";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[0].innerHTML=='<span class="red">O</span>' && box[3].innerHTML=='<span class="red">O</span>' && box[6].innerHTML=='<span class="red">O</span>'){
        a=0
        b=3
        c=6
        
        winner="O";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[0].innerHTML=='<span class="sky">X</span>' && box[3].innerHTML=='<span class="sky">X</span>' && box[6].innerHTML=='<span class="sky">X</span>'){
        a=0
        b=3
        c=6
        
        winner="X";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[1].innerHTML=='<span class="red">O</span>' && box[4].innerHTML=='<span class="red">O</span>' && box[7].innerHTML=='<span class="red">O</span>'){
        a=1
        b=4
        c=7
        
        winner="O";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[1].innerHTML=='<span class="sky">X</span>' && box[4].innerHTML=='<span class="sky">X</span>' && box[7].innerHTML=='<span class="sky">X</span>'){
        a=1
        b=4
        c=7
        
        winner="X";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[2].innerHTML=='<span class="red">O</span>' && box[5].innerHTML=='<span class="red">O</span>' && box[8].innerHTML=='<span class="red">O</span>'){
        a=2
        b=5
        c=8
        
        winner="O";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[2].innerHTML=='<span class="sky">X</span>' && box[5].innerHTML=='<span class="sky">X</span>' && box[8].innerHTML=='<span class="sky">X</span>'){
        a=2
        b=5
        c=8
        winner="X";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[0].innerHTML=='<span class="red">O</span>' && box[1].innerHTML=='<span class="red">O</span>' && box[2].innerHTML=='<span class="red">O</span>'){
        a=0
        b=1
        c=2
        
        winner="O";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[0].innerHTML=='<span class="sky">X</span>' && box[1].innerHTML=='<span class="sky">X</span>' && box[2].innerHTML=='<span class="sky">X</span>'){
        a=0
        b=1
        c=2
        
        winner="X";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[3].innerHTML=='<span class="red">O</span>' && box[4].innerHTML=='<span class="red">O</span>' && box[5].innerHTML=='<span class="red">O</span>'){
        a=3
        b=4
        c=5
        
        winner="O";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[3].innerHTML=='<span class="sky">X</span>' && box[4].innerHTML=='<span class="sky">X</span>' && box[5].innerHTML=='<span class="sky">X</span>'){
        a=3
        b=4
        c=5
        
        winner="X";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[6].innerHTML=='<span class="sky">X</span>' && box[7].innerHTML=='<span class="sky">X</span>' && box[8].innerHTML=='<span class="sky">X</span>'){
        a=6
        b=7
        c=8
        winner="X";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(box[6].innerHTML=='<span class="red">O</span>' && box[7].innerHTML=='<span class="red">O</span>' && box[8].innerHTML=='<span class="red">O</span>'){
        a=6
        b=7
        c=8
        
        winner="O";
        win=true;
        userInp=true;
        gameWin(a,b,c);
    }
    else if(click==5 && win==false){
        gameDraw();
    }
}

function randomNumber(){
    let randomPos=Math.floor(Math.random()*9);
    return randomPos;
}
function O(boxNumber,Computer,boxIndexes,arrForComInp){
    existInBoxIndexe=false;
    signalForComInp=false;
    let randomPos=randomNumber();
    
    
    for(let i=0;i<arrayForCheckRepeatElm.length;i++){
        if(randomPos==arrayForCheckRepeatElm[i]){
            signalForComInp=true;
            break
        }
    }
   
    if(signalForComInp==false){
        
        if(click==1){
            if(box[4].innerHTML!='<span class="sky">X</span>' && box[4].innerHTML!='<span class="red">O</span>'){
                arrForComInp[ind]=randomPos;
                ind+=1;
                X(4,Computer,boxIndexes,arrForComInp);
            }
            else{
            arrForComInp[ind]=randomPos;
            ind+=1;
        X(randomPos,Computer,boxIndexes,arrForComInp);
            }
        }
        else{
            let cpu=cpuTurn(randomPos);
            for(let i=0;i<boxIndexes.length;i++){
                if(cpu==boxIndexes[i]){
                    existInBoxIndexe=true;
                    break
                }
            }
            if(existInBoxIndexe==false){
            arrForComInp[ind]=cpu;
            ind+=1;
            X(cpu,Computer,boxIndexes,arrForComInp);
            }
            else{
                console.log("akane asche")
                O(boxNumber,Computer,boxIndexes,arrForComInp);
            }
        }
    }
   else{
       O(boxNumber,Computer,boxIndexes,arrForComInp);
       
    }
}

function cpuTurn(randomPos){
     cpu=randomPos;
    
    if(box[0].innerHTML=='<span class="sky">X</span>' && box[4].innerHTML=='<span class="sky">X</span>' && (box[8].innerHTML!='<span class="sky">X</span>' && box[8].innerHTML!='<span class="red">O</span>')){
         cpu=8;
         
         cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
    }
    else if(box[0].innerHTML=='<span class="sky">X</span>' && box[8].innerHTML=='<span class="sky">X</span>' && (box[4].innerHTML!='<span class="sky">X</span>' && box[4].innerHTML!='<span class="red">O</span>')){
        cpu=4;
          cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
   }
   else if(box[4].innerHTML=='<span class="sky">X</span>' && box[8].innerHTML=='<span class="sky">X</span>' && (box[0].innerHTML!='<span class="sky">X</span>' && box[0].innerHTML!='<span class="red">O</span>')){
    cpu=0;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
    else  if(box[2].innerHTML=='<span class="sky">X</span>' && box[4].innerHTML=='<span class="sky">X</span>' && (box[6].innerHTML!='<span class="sky">X</span>' && box[6].innerHTML!='<span class="red">O</span>')){
    cpu=6;
     cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo 
         }
}
    else if(box[4].innerHTML=='<span class="sky">X</span>' && box[6].innerHTML=='<span class="sky">X</span>' && (box[2].innerHTML!='<span class="sky">X</span>' && box[2].innerHTML!='<span class="red">O</span>')){
   cpu=2;
    let cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
    else if(box[2].innerHTML=='<span class="sky">X</span>' && box[6].innerHTML=='<span class="sky">X</span>' && (box[4].innerHTML!='<span class="sky">X</span>' && box[4].innerHTML!='<span class="red">O</span>')){
    cpu=4;
     cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[0].innerHTML=='<span class="sky">X</span>' && box[1].innerHTML=='<span class="sky">X</span>' && (box[2].innerHTML!='<span class="sky">X</span>' && box[2].innerHTML!='<span class="red">O</span>')){
    cpu=2;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[0].innerHTML=='<span class="sky">X</span>' && box[2].innerHTML=='<span class="sky">X</span>' && (box[1].innerHTML!='<span class="sky">X</span>' && box[1].innerHTML!='<span class="red">O</span>')){
    cpu=1;
     cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[1].innerHTML=='<span class="sky">X</span>' && box[2].innerHTML=='<span class="sky">X</span>' && (box[0].innerHTML!='<span class="sky">X</span>' && box[0].innerHTML!='<span class="red">O</span>')){
    cpu=0;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[3].innerHTML=='<span class="sky">X</span>' && box[4].innerHTML=='<span class="sky">X</span>' && (box[5].innerHTML!='<span class="sky">X</span>' && box[5].innerHTML!='<span class="red">O</span>')){
    cpu=5;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[3].innerHTML=='<span class="sky">X</span>' && box[5].innerHTML=='<span class="sky">X</span>' && (box[4].innerHTML!='<span class="sky">X</span>' && box[4].innerHTML!='<span class="red">O</span>')){
    cpu=4;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[4].innerHTML=='<span class="sky">X</span>' && box[5].innerHTML=='<span class="sky">X</span>' && (box[3].innerHTML!='<span class="sky">X</span>' && box[3].innerHTML!='<span class="red">O</span>')){
    cpu=3;
     cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[6].innerHTML=='<span class="sky">X</span>' && box[7].innerHTML=='<span class="sky">X</span>' && (box[8].innerHTML!='<span class="sky">X</span>' && box[8].innerHTML!='<span class="red">O</span>')){
    cpu=8;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[6].innerHTML=='<span class="sky">X</span>' && box[8].innerHTML=='<span class="sky">X</span>' && (box[7].innerHTML!='<span class="sky">X</span>' && box[7].innerHTML!='<span class="red">O</span>')){
    cpu=7;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[7].innerHTML=='<span class="sky">X</span>' && box[8].innerHTML=='<span class="sky">X</span>' && (box[6].innerHTML!='<span class="sky">X</span>' && box[6].innerHTML!='<span class="red">O</span>')){
    cpu=6;
     cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[0].innerHTML=='<span class="sky">X</span>' && box[3].innerHTML=='<span class="sky">X</span>' && (box[6].innerHTML!='<span class="sky">X</span>' && box[6].innerHTML!='<span class="red">O</span>')){
    cpu=6;
     cpuDemo= compWinLogic(randomPos)
     console.log("ai line"+cpuDemo)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[0].innerHTML=='<span class="sky">X</span>' && box[6].innerHTML=='<span class="sky">X</span>' && (box[3].innerHTML!='<span class="sky">X</span>' && box[3].innerHTML!='<span class="red">O</span>')){
    cpu=3;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[6].innerHTML=='<span class="sky">X</span>' && box[3].innerHTML=='<span class="sky">X</span>' && (box[0].innerHTML!='<span class="sky">X</span>' && box[0].innerHTML!='<span class="red">O</span>')){
    cpu=0;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[0].innerHTML=='<span class="sky">X</span>' && box[3].innerHTML=='<span class="sky">X</span>' && (box[6].innerHTML!='<span class="sky">X</span>' && box[6].innerHTML!='<span class="red">O</span>')){
    cpu=6;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[1].innerHTML=='<span class="sky">X</span>' && box[4].innerHTML=='<span class="sky">X</span>' && (box[7].innerHTML!='<span class="sky">X</span>' && box[7].innerHTML!='<span class="red">O</span>')){
    cpu=7;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[1].innerHTML=='<span class="sky">X</span>' && box[7].innerHTML=='<span class="sky">X</span>' && (box[4].innerHTML!='<span class="sky">X</span>' && box[4].innerHTML!='<span class="red">O</span>')){
    cpu=4;
     cpuDemo= compWinLogic()
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[4].innerHTML=='<span class="sky">X</span>' && box[7].innerHTML=='<span class="sky">X</span>' && (box[1].innerHTML!='<span class="sky">X</span>' && box[1].innerHTML!='<span class="red">O</span>')){
    cpu=1;
     cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[2].innerHTML=='<span class="sky">X</span>' && box[5].innerHTML=='<span class="sky">X</span>' && (box[8].innerHTML!='<span class="sky">X</span>' && box[8].innerHTML!='<span class="red">O</span>')){
    cpu=8;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[2].innerHTML=='<span class="sky">X</span>' && box[8].innerHTML=='<span class="sky">X</span>' && (box[5].innerHTML!='<span class="sky">X</span>' && box[5].innerHTML!='<span class="red">O</span>')){
    cpu=5;
      cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else if(box[5].innerHTML=='<span class="sky">X</span>' && box[8].innerHTML=='<span class="sky">X</span>' && (box[2].innerHTML!='<span class="sky">X</span>' && box[2].innerHTML!='<span class="red">O</span>')){
    cpu=2;
       cpuDemo= compWinLogic(randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
else  {
     cpuDemo= compWinLogic(randomPos)
     console.log("rp"+randomPos)
         if(signalForComWin==true){
            cpu=cpuDemo
         }
}
    console.log(signalForComWin);
    console.log(cpu+"cpu")
    return cpu;
}

function gameWin(a,b,c){
    signalForLeftelm=false;
    if(winner=="X"){

    winAudio.play()
    result.innerHTML=`<h1>You Win...</h1>`;
    box[a].innerHTML=`<span class="green">X</span>`
    box[b].innerHTML=`<span class="green">X</span>`
    box[c].innerHTML=`<span class="green">X</span>`
    for(let i=0;i<9;i++){
        for(let j=0;arrayForCheckRepeatElm.length;j++){
            if(i!=arrayForCheckRepeatElm[j]){
                signalForLeftelm=true;
                break
            }
            else{
                signalForLeftelm=false;
            }
        }
        if(signalForLeftelm==true){
            arrayForCheckRepeatElm.push(i)
        }
    }
   
}
    else{
        result.innerHTML=`<h1>Computer Win...</h1>`;  
        box[a].innerHTML=`<span class="green">O</span>`
        box[b].innerHTML=`<span class="green">O</span>`
        box[c].innerHTML=`<span class="green">O</span>`
        for(let i=0;i<9;i++){
            for(let j=0;arrayForCheckRepeatElm.length;j++){
                if(i!=arrayForCheckRepeatElm[j]){
                    signalForLeftelm=true;
                    break
                }
                else{
                    signalForLeftelm=false;
                }
            }
            if(signalForLeftelm==true){
                arrayForCheckRepeatElm.push(i)
            }
        }
        losekAudio.play()
    }
}
function gameDraw(){
    signalForLeftelm=true;
    result.innerHTML=`<h1>Draw</h1>`;
    drawAudio.play();
    for(let i=0;i<9;i++){
        for(let j=0;arrayForCheckRepeatElm.length;j++){
            if(i!=arrayForCheckRepeatElm[j]){
                signalForLeftelm=false;
                break
            }
            else{
                signalForLeftelm=true;
            }
        }
        if(signalForLeftelm==false){
            arrayForCheckRepeatElm.push(i)
        }
    }
}
function compWinLogic(randomPos){
        signalForComWin=false;
        console.log("rd"+randomPos)
        comWinPos=randomPos;
        if(box[0].innerHTML=='<span class="red">O</span>' && box[4].innerHTML=='<span class="red">O</span>' && (box[8].innerHTML!='<span class="sky">X</span>' && box[8].innerHTML!='<span class="red">O</span>')){
             comWinPos=8;
             signalForComWin=true
        }
        else if(box[0].innerHTML=='<span class="red">O</span>' && box[8].innerHTML=='<span class="red">O</span>' && (box[4].innerHTML!='<span class="sky">X</span>' && box[4].innerHTML!='<span class="red">O</span>')){
            comWinPos=4;
            signalForComWin=true
       }
       else if(box[4].innerHTML=='<span class="red">O</span>' && box[8].innerHTML=='<span class="red">O</span>' && (box[0].innerHTML!='<span class="sky">X</span>' && box[0].innerHTML!='<span class="red">O</span>')){
        comWinPos=0;
        signalForComWin=true
    }
        else  if(box[2].innerHTML=='<span class="red">O</span>' && box[4].innerHTML=='<span class="red">O</span>' && (box[6].innerHTML!='<span class="sky">X</span>' && box[6].innerHTML!='<span class="red">O</span>')){
        comWinPos=6;
        signalForComWin=true
        console.log("right dig")
    }
        else if(box[4].innerHTML=='<span class="red">O</span>' && box[6].innerHTML=='<span class="red">O</span>' && (box[2].innerHTML!='<span class="sky">X</span>' && box[2].innerHTML!='<span class="red">O</span>')){
       comWinPos=2;
       signalForComWin=true
    }
        else if(box[2].innerHTML=='<span class="red">O</span>' && box[6].innerHTML=='<span class="red">O</span>' && (box[4].innerHTML!='<span class="sky">X</span>' && box[4].innerHTML!='<span class="red">O</span>')){
        comWinPos=4;
        signalForComWin=true
    }
    else if(box[0].innerHTML=='<span class="red">O</span>' && box[1].innerHTML=='<span class="red">O</span>' && (box[2].innerHTML!='<span class="sky">X</span>' && box[2].innerHTML!='<span class="red">O</span>')){
        comWinPos=2;
        signalForComWin=true
    }
    else if(box[0].innerHTML=='<span class="red">O</span>' && box[2].innerHTML=='<span class="red">O</span>' && (box[1].innerHTML!='<span class="sky">X</span>' && box[1].innerHTML!='<span class="red">O</span>')){
        comWinPos=1;
        signalForComWin=true
    }
    else if(box[1].innerHTML=='<span class="red">O</span>' && box[2].innerHTML=='<span class="red">O</span>' && (box[0].innerHTML!='<span class="sky">X</span>' && box[0].innerHTML!='<span class="red">O</span>')){
        comWinPos=0;
        signalForComWin=true
    }
    else if(box[3].innerHTML=='<span class="red">O</span>' && box[4].innerHTML=='<span class="red">O</span>' && (box[5].innerHTML!='<span class="sky">X</span>' && box[5].innerHTML!='<span class="red">O</span>')){
        comWinPos=5;
        signalForComWin=true
    }
    else if(box[3].innerHTML=='<span class="red">O</span>' && box[5].innerHTML=='<span class="red">O</span>' && (box[4].innerHTML!='<span class="sky">X</span>' && box[4].innerHTML!='<span class="red">O</span>')){
        comWinPos=4;
        signalForComWin=true
    }
    else if(box[4].innerHTML=='<span class="red">O</span>' && box[5].innerHTML=='<span class="red">O</span>' && (box[3].innerHTML!='<span class="sky">X</span>' && box[3].innerHTML!='<span class="red">O</span>')){
        comWinPos=3;
        signalForComWin=true
    }
    else if(box[6].innerHTML=='<span class="red">O</span>' && box[7].innerHTML=='<span class="red">O</span>' && (box[8].innerHTML!='<span class="sky">X</span>' && box[8].innerHTML!='<span class="red">O</span>')){
        comWinPos=8;
        signalForComWin=true
    }
    else if(box[6].innerHTML=='<span class="red">O</span>' && box[8].innerHTML=='<span class="red">O</span>' && (box[7].innerHTML!='<span class="sky">X</span>' && box[7].innerHTML!='<span class="red">O</span>')){
        comWinPos=7;
        signalForComWin=true
    }
    else if(box[7].innerHTML=='<span class="red">O</span>' && box[8].innerHTML=='<span class="red">O</span>' && (box[6].innerHTML!='<span class="sky">X</span>' && box[6].innerHTML!='<span class="red">O</span>')){
        comWinPos=6;
        signalForComWin=true
        console.log("3row")
    }
    else if(box[0].innerHTML=='<span class="red">O</span>' && box[3].innerHTML=='<span class="red">O</span>' && (box[6].innerHTML!='<span class="sky">X</span>' && box[6].innerHTML!='<span class="red">O</span>')){
        comWinPos=6;
        signalForComWin=true
        console.log("1col")
    }
    else if(box[0].innerHTML=='<span class="red">O</span>' && box[6].innerHTML=='<span class="red">O</span>' && (box[3].innerHTML!='<span class="sky">X</span>' && box[3].innerHTML!='<span class="red">O</span>')){
        comWinPos=3;
        signalForComWin=true
    }
    else if(box[6].innerHTML=='<span class="red">O</span>' && box[3].innerHTML=='<span class="red">O</span>' && (box[0].innerHTML!='<span class="sky">X</span>' && box[0].innerHTML!='<span class="red">O</span>')){
        comWinPos=0;
        signalForComWin=true
    }
    else if(box[0].innerHTML=='<span class="red">O</span>' && box[3].innerHTML=='<span class="red">O</span>' && (box[6].innerHTML!='<span class="sky">X</span>' && box[6].innerHTML!='<span class="red">O</span>')){
        comWinPos=6;
        signalForComWin=true
        console.log("jgjvjvb654651")
    }
    else if(box[1].innerHTML=='<span class="red">O</span>' && box[4].innerHTML=='<span class="red">O</span>' && (box[7].innerHTML!='<span class="sky">X</span>' && box[7].innerHTML!='<span class="red">O</span>')){
        comWinPos=7;
        signalForComWin=true
        console.log("lollll")
    }
    else if(box[1].innerHTML=='<span class="red">O</span>' && box[7].innerHTML=='<span class="red">O</span>' && (box[4].innerHTML!='<span class="sky">X</span>' && box[4].innerHTML!='<span class="red">O</span>')){
        comWinPos=4;
        signalForComWin=true
    }
    else if(box[4].innerHTML=='<span class="red">O</span>' && box[7].innerHTML=='<span class="red">O</span>' && (box[1].innerHTML!='<span class="sky">X</span>' && box[1].innerHTML!='<span class="red">O</span>')){
        comWinPos=1;
        signalForComWin=true
    }
    else if(box[2].innerHTML=='<span class="red">O</span>' && box[5].innerHTML=='<span class="red">O</span>' && (box[8].innerHTML!='<span class="sky">X</span>' && box[8].innerHTML!='<span class="red">O</span>')){
        comWinPos=8;
        signalForComWin=true
    }
    else if(box[2].innerHTML=='<span class="red">O</span>' && box[8].innerHTML=='<span class="red">O</span>' && (box[5].innerHTML!='<span class="sky">X</span>' && box[5].innerHTML!='<span class="red">O</span>')){
        comWinPos=5;
        signalForComWin=true
    }
    else if(box[5].innerHTML=='<span class="red">O</span>' && box[8].innerHTML=='<span class="red">O</span>' && (box[2].innerHTML!='<span class="sky">X</span>' && box[2].innerHTML!='<span class="red">O</span>')){
        comWinPos=2;
        signalForComWin=true
    }
    console.log(comWinPos+"comwinpos")
        return comWinPos;
    }
    reset.addEventListener('click', () => {
        replaySound.play();
        while(boxIndexes.length>0){
            boxIndexes.pop();
        }
    
        while(arrForComInp.length>0){
            arrForComInp.pop();
        }
    
        while(arrayForCheckRepeatElm.length>0){
            arrayForCheckRepeatElm.pop();
        }
        for(let i=0;i<9;i++){
            box[i].innerHTML=""
        }
        ind=0;
        signalForComInp=false;
        signal=false
        index=0;
        count=0;
        click=0;
        win=false
        existInBoxIndexe=false
        userInp=false
        result.innerHTML=""
    })
