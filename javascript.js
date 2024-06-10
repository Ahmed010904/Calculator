

const display = document.getElementById("Input");
var on=0;

function Input(input){
    if(on==0) return;
    if(display.value=="ERROR" || display.value=="undefined"){
        Clear();
    }
    display.value += input;
}

function Clear(){
    if(on==0) return;
    display.value = "";   
}

function Supp(){
    if(on==0) return;
    if((display.value)=="ERROR") Clear();
    display.value=display.value.slice(0,-1);    
}

function Calcul(){
    if(on==0) return;
    try{
        display.value = eval(display.value);
    }
    catch(ERROR){
        display.value = "ERROR";
    }
}

function Toggle(){    
    if(on==0){
        display.value="On";
        setTimeout(function(){
            Clear();
        },250);
        on=1;
    }
    else{
    on=0;
    display.value="OFF";
    setTimeout(function(){
        initialise();        
    },500);
    }
}

function initialise(){
    var date = new Date();
    display.value=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    display.value+="   "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    setTimeout(function() {
        if(on==0) initialise();
    },999);
}

function GoToMe(){
    //window.location.href="https://www.instagram.com/ahmed_hami_dou/";
    window.open("https://www.instagram.com/ahmed_hami_dou/", "_blank");
}

function Delete(){
    if(on==0) return;
    var button = document.getElementById('delete_but'); 
    var holdTime = 500;
    var holdTimer;

button.addEventListener('mousedown', function() {
   
    holdTimer = setTimeout(function() {
        Clear();
    }, holdTime);
});

button.addEventListener('mouseup', function() {
    clearTimeout(holdTimer);
});
}