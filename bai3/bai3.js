var time;
var m = 0;
var s = 0;
var ms = 0;
function run(){
    if(ms == 9){
        if(s == 59){
            m++;
            s = 0;
            ms = 0;
        }else{
            s++;
            ms = 0;
        }
    }else{
        ms++;
    }
    if(m < 10){
        document.getElementById("minute").innerHTML = '0' + m;
    }else{
        document.getElementById("minute").innerHTML = m;
    }

    if(s < 10){
        document.getElementById("second").innerHTML = '0' + s;
    }else{
        document.getElementById("second").innerHTML = s;
    }
    document.getElementById("msecond").innerHTML = ms;
}

function start(){
    var ms = 0;
    time = setInterval(function(){
        run()
    }, 100);
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
}

function pause(){
    clearInterval(time);
    document.getElementById('start').disabled = false;
    document.getElementById('start').value = 'Tiếp tục';
    document.getElementById('pause').disabled = true;
}

function reset(){
    clearInterval(time);
    m = 0;
    s = 0;
    ms = 0;
    document.getElementById("minute").innerHTML = '0' + m;
    document.getElementById("second").innerHTML = '0' + s;
    document.getElementById("msecond").innerHTML = ms;
    document.getElementById('start').disabled = false;
    document.getElementById('start').value = 'Bắt đầu';
    document.getElementById('pause').disabled = true;
}