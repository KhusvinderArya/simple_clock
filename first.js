let k = document.querySelector("#hour_part");
let l = document.querySelector("#min_part");
let m = document.querySelector("#prd_part");
let n = document.querySelector("#sec_part");
clock()
function clock() {
    const d = new Date();
    //declaration of sub part of clock
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    
    //hr content
    if (hr <= 9)
        k.innerHTML = "0" + hr;
    else
        k.innerHTML = hr;
    
    //min content
    if (min <= 9)
        l.innerHTML = "0" + min
    else
        l.innerHTML = min;

    //sec content
    if (sec <= 9)
        m.innerHTML = "0" + sec
    else
        m.innerHTML = sec;

    //period part
    if(hr<=12 && hr>=1) n.innerHTML = "AM"
    else n.innerHTML = "PM"
}

setInterval(clock,1000)