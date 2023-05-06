let workP = document.getElementById('work')
let breakP = document.getElementById('short-break')

let workTime = 25
let breakTime = 5
let seconds = "00"

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime
    document.getElementById('seconds').innerHTML = seconds
    workP.classList.add('active')
}

//Start count

function startCount() {
    document.getElementById('start').style.display = "none"
    document.getElementById('reset').style.display = "block"


    seconds = 59
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes
        document.getElementById('seconds').innerHTML = seconds
        
        seconds--
        if(seconds === 0){
            workMinutes --
            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    workMinutes = breakMinutes
                    breakCount++
                    workP.classList.remove('active')
                    breakP.classList.add('active')
                } else{
                    workMinutes = workTime
                    breakCount++
                    breakP.classList.remove('active')
                    workP.classList.add('active')
                }
            }
            seconds = 59;
        }
    }

    setInterval(timerFunction, 1000)
}
