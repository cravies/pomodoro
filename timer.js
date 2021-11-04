//start with 1500 seconds
var mins=25;
var seconds=0;
var running=false;
var num_running=0;
var default_str="25:00 remaining";
var looper;

document.getElementById("timer").innerHTML=default_str;

//run the start function every second if called.
function start_pomo() {
    if (running==false) {
        return 0;
    }
    
    if (seconds==0) {
        //decrement mins and set seconds to 60
        mins = mins - 1;
        seconds = 60;
    } else {
        seconds = seconds - 1;
    }
    document.getElementById("timer").innerHTML=mins+":"+seconds+" remaining";
    looper = setTimeout(start_pomo,1000);
}

function pause_pomo() {
    //set running = false
    running = false;
}

function set_true() {
    /*check if the function is already running*/
    if (running==true) {
        /*only want one thread at a time*/
        cleartimeout(looper);
    } else {
        running=true;
    }
}

function reset_pomo() {
    //reset the time
    mins=25;
    seconds=0;
    running=false;
    var default_str="25:00 remaining";
    document.getElementById("timer").innerHTML=default_str;
}
