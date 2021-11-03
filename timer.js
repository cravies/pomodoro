//start with 1500 seconds
var mins=25;
var seconds=0;
var running=false;
var default_str="25:00 remaining";
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
    document.getElementById("timer").innerHTML=mins+":"+seconds+" remaining.";
    document.getElementById("quote").style.color = "green";
    setTimeout(start_pomo,1000);
}

function pause_pomo() {
    //set running = false
    running = false;
    document.getElementById("quote").style.color = "blue";
}

function set_true() {
    //allow the clock to run
    running = true;
}

function reset_pomo() {
    //reset the time
    var default_str="25:00 remaining";
    document.getElementById("timer").innerHTML=default_str;
}