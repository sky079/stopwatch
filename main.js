var hr = 0;
var min = 0;
var sec = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;

}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    


}

function stopwatch(){
    if(timer == true){
        sec++;
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        var s_hr = hr;
        var s_min = min;
        var s_sec = sec;
        if(hr < 10){
            s_hr = "0" + s_hr;
        }
        if(min < 10){
            s_min = "0" + s_min;
        } if(sec < 10){
            s_sec = "0" + s_sec;
        }



        document.getElementById("hr").innerHTML = s_hr;
        document.getElementById("min").innerHTML = s_min;
        document.getElementById("sec").innerHTML = s_sec;
        setTimeout("stopwatch()", 1000)
    }

}