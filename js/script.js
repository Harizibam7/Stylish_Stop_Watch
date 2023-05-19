const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');
let hrs=min=sec=msec=0,startTimer;


btnStart.addEventListener('click',()=>{
    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');
    startTimer=setInterval(()=>{
        
         msec++;
         if(msec==100){
             sec++;
             msec=0;
         }
         if(sec==60){
             min++;
             sec=0;
         }
         if(min==60){
             hrs++;
             min=0;
         }
         updateTimer();
    },100);
    
});
btnStop.addEventListener('click',()=>{
    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');
    clearInterval(startTimer);
    updateTimer();

});
btnReset.addEventListener('click',()=>{
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');
    hrs=min=sec=msec=0;
    updateTimer();
    
});
function updateTimer(){
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pmsec=msec<10?'0'+msec:msec;

    document.querySelector('.hrs').innerText=phrs;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.msec').innerText=pmsec;
}   