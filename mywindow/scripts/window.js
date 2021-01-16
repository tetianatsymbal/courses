(function(){
    const startCountdownBtn = document.querySelector(".b-mywindow__start-countdown");
    const stopCountdownBtn  = document.querySelector(".b-mywindow__stop-countdown");
    const startTickerBtn  = document.querySelector(".b-mywindow__start-ticker");
    const stopTickerBtn  = document.querySelector(".b-mywindow__stop-ticker");
    const openWindowBtn  = document.querySelector(".b-mywindow__open-window");
    const closeWindowBtn  = document.querySelector(".b-mywindow__close-window");

    let setTimeoutId = null,
        tickerTime = 0,
        setIntervalId = null,
        windowId = null
        ;

    const startCountDown = () =>{
        let mayIStart  = confirm("Можно начинать?");
        if(mayIStart){
            setTimeoutId = setTimeout(startCountDownMessage, 5000);
        }
        else{
            alert("ОК, выбирайте любое действие");
        }
    }

    const startCountDownMessage = () =>{
        alert("Пройшло 5 секунд");
    }
    const stopCountdown = () =>{
        clearTimeout(setTimeoutId);
        alert("Обратный отсчет прерван");

    }
    const startTicker = () =>{
        setIntervalId = setInterval(startTickerMessage, 2000)
    }
    const startTickerMessage = () =>{
        tickerTime += 2;
        console.log(`Прошло ${tickerTime} секунд`);
    }
    const stopTicker = () =>{
        clearInterval(setIntervalId);
        console.log(`Таймер на паузе`);
    }
    const openWindow = () =>{
        windowId = window.open("form2.html", "", "width=400,height=500");
    }
    const closeWindow = () =>{
        windowId.close();
    }

    startCountdownBtn.onclick = startCountDown;
    stopCountdownBtn.onclick = stopCountdown;
    startTickerBtn.onclick = startTicker;
    stopTickerBtn.onclick = stopTicker;
    openWindowBtn.onclick = openWindow;
    closeWindowBtn.onclick = closeWindow;

}())