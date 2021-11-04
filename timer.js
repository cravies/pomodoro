var mins=25;
var seconds=0;
var running=false;
var default_str="25:00 remaining";
var looper;
var on_break=false;
var pomos_done=0;

//set default time
document.getElementById("timer").innerHTML=default_str;

//run the start function every second if called.
function start_pomo() {
    if (running==false) {
        return 0;
    }
    
    if (seconds==0) {
        if (mins==0) {
            //out of time. Switch from break->pomo 
            //or vice versa
            if (on_break==false) {
                pomos_done = pomos_done + 1;
                on_break=true;
                set_break();
                mins=5;
                seconds=0;
                done=document.getElementById("done");
                done.innerHTML="Pomodoros done: "+pomos_done;
            } else {
                on_break=false;
                set_pomo();
                mins=25;
                seconds=0;
            }
        } else {
            //decrement mins and set seconds to 60
            mins = mins - 1;
            seconds = 60;
        }
    } else {
        seconds = seconds - 1;
    }
    document.getElementById("timer").innerHTML=mins+":"+seconds+" remaining";
    looper = setTimeout(start_pomo,1000);
}

function set_true() {
    /*check if the function is already running*/
    if (running==true) {
        /*only want one countdown running at a time*/
        cleartimeout(looper);
    } else {
        running=true;
    }
}

function reset_pomo() {
    //reset the pomodoro timer
    set_pomo();
    mins=25;
    seconds=0;
    running=false;
    var default_str="25:00 remaining";
    document.getElementById("timer").innerHTML=default_str;
    cleartimeout(looper);
}

function set_break() {
    //pomo complete. 5 min break!
    //update styling to reflect this
    header=document.getElementById("header");
    header.innerHTML="🎉 Break Timer 🎉";
    header.style.color='green';
    timer=document.getElementById("timer");
    timer.style.color='green';
}

function set_pomo() {
    //break complete. Pomo time!
    //update styling to reflect this.
    header=document.getElementById("header");
    header.innerHTML="🍅 ⏲️ Pomodoro Timer ⏲️ 🍅";
    header.style.color='red';
    timer=document.getElementById("timer");
    timer.style.color='red';
}
