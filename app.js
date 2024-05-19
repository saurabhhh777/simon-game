
let user = [];
let autoCol = [];

let btns = ["box1" , "box2" , "box3" , "box4"];

let level = 0;
let start = false;

let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function(){
    if(start == false){
        console.log("key pressed !");
        start = true;
        levelup();
    }

});

function autocolor(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        // autoCol.push(btn);
        // console.log(btn);
    }, 250);
}

function levelup(){
    level ++;
    user = [];
    
    // h3.classList.add("lev");
    h3.innerText = `Level ${level}`;

    let rannum = Math.floor(Math.random()*3);
    let ranColName = btns[rannum];
    autoCol.push(ranColName);
    console.log(autoCol);
    let box = document.querySelector(`.${ranColName}`);
    


    autocolor(box);

}
function usercolor(btn){
    btn.classList.add("userflash");
    // user.push(btn);
    // console.log(btn);
    setTimeout(function(){
        
        btn.classList.remove("userflash");
    }, 250);
}
function resetval(){
    autoCol = [];
    level = 0;
    start = false;
    user = [];

}

function valCheker(index){
    if(autoCol[index]==user[index]){
        if(user.length==autoCol.length){
            setTimeout(levelup , 2000);
        }
        
    }
    else{
        h3.innerHTML = `Game over ! Your score is <b>${level} </b> <br> Please enter any key`;
        document.querySelector("body").style.backgroundColor = "Red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "White";
        },200);
        resetval();
    }
}

function userbtn(){
    let r = this;
    usercolor(r);

    
    let userval = r.getAttribute("id");
    // console.log(userval);
    
    user.push(userval);
    console.log(user);

    valCheker(user.length-1);
    
}


let bt = document.querySelectorAll(".box-content");
for(btn of bt){
    btn.addEventListener("click" , userbtn);
}


