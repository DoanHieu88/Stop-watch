let milisecond = 00;
let second = 00;
let minuate = 00;
let btnReset = document.querySelector("#reset");
let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");
let appenMilisecond = document.querySelector("#milisecond");
let appenSecond = document.querySelector("#second");
let appenMinute = document.querySelector("#minute");
let interval;

// hàm start
function start(){
    milisecond++;
    if(milisecond >99){
        milisecond =00;
        second++;
        if(second < 10){
            second = "0" + second;
        }
        appenSecond.innerHTML = second ;
        if(second > 59){
            second = 0;
            minuate++;
            appenMinute.innerHTML = minuate ;
        }
    }
    if(milisecond < 10){
        milisecond = "0" + milisecond;
    }
    appenMilisecond.innerHTML = milisecond;
}

// button start
btnStart.onclick = ()=>{
   interval = setInterval(start, 10);
}
// button stop
btnStop.onclick = ()=>{
    clearInterval(interval);

}
//button reset
btnReset.onclick= ()=>{
    clearInterval(interval);
    milisecond = "00";
    second = "00";
    minuate = "00";
    appenMilisecond.innerHTML = milisecond;
    appenSecond.innerHTML = second ;
    appenMinute.innerHTML = minuate ;

}
