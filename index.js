

let sec = 0
let min = 0
let hr = 0
let interval

function digits(digits){
    if(digits<10){
        return('0'+digits)
    }else {
        return (digits)
    }
}

function start02() {
    contador()
 interval = setInterval(contador,1000)
}

function pause02() {
 clearInterval(interval)
}
function stop02() {
clearInterval(interval)
    sec = 0
    min = 0
    hr = 0
    document.getElementById('contador').innerText='00:00:00'   
}

function contador() {
      sec++
     if (sec==60){
        min++
        sec=0
        if (min==60)
           hr++
                      
     }
     document.getElementById('contador').innerText= digits(hr)+':'+digits(min)+':'+digits(sec)

    }