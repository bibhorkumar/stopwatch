//variables to store time values
var sec=0;
var min=0;
var hour=0;

//variable which display time 
var displayseconds=0;
var displayminutes=0;
var displayhours=0;

//variable storing id of setInterval function 
var intID=0;

//entire functionality(logic) of stopwatch
function stopwatch(){
 
    sec++;
    if(sec%60===0){
        min++;
        sec=0;
    
        if(min%60===0){
            hour++;
            min=0;

        }

    }

    if(sec<10){
        displayseconds="0"+sec.toString();
    }else{
        displayseconds=sec;  
    }

    if(min<10){
        displayminutes="0"+min.toString();
    }else{
        displayseconds=min;  
    }

    if(hour<10){
        displayhours="0"+hour.toString();
    }else{
        displayseconds=hour;  
    }

    document.getElementById("display").innerHTML= displayhours+":"+displayminutes+":"+displayseconds;

}


//start button functionality
document.getElementById("start").addEventListener("click",function(){
     intID=setInterval( stopwatch, 1000 );
});



//stop button functionality
document.getElementById("stop").addEventListener("click",function(){
    clearInterval(intID);

});


//reset button functionality
document.getElementById("reset").addEventListener("click", function(){
    clearInterval(intID);
    sec=0;
    min=0;
    hour=0;
    document.getElementById("display").innerHTML="00:00:00";
});
