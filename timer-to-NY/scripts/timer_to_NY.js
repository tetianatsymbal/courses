class Clock{
    constructor(id){
        this.clock = document.getElementById(id);
        this.init();
        setInterval(this.init.bind(this), 1000);
    }
    init(){
        this.getTimeData(".hours");
        this.getTimeData(".min");
        this.getTimeData(".sec");
    }
    getTimeData(cssClass){
        const currentTimePlaceDays =  this.clock.querySelector(".days");
        const currentTimePlaceMin =  this.clock.querySelector(".min");
        const currentTimePlaceSec =  this.clock.querySelector(".sec");
        const currentTimePlaceHours =  this.clock.querySelector(".hours");
        const newYear = new Date("Jan,01,2022,00:00:00");
        
        const msPerDay = 24*60*60*1000;
        const msPerHr = 60*60*1000;
        const msPerMin = 60*1000;
        const msPerSec = 1000;
    
        let now = new Date(),
            totalRemains = newYear-now;
                
        if (totalRemains>1){
            // let RemainsSec=( Math.trunc(totalRemains/msPerSec)),
            let RemainsFullDays = (Math.trunc(totalRemains/msPerDay)),
                RemainsHours = totalRemains - (RemainsFullDays*msPerDay),
                RemainsFullHours = (Math.trunc(RemainsHours/msPerHr)),
                RemainsMin = RemainsHours - (RemainsFullHours*msPerHr),
                RemainsFullMin = (Math.trunc(RemainsMin/msPerMin)),
                RemainsFullSec = Math.trunc((RemainsMin - (RemainsFullMin*msPerMin))/msPerSec);
                
                currentTimePlaceDays.innerHTML = RemainsFullDays;
                currentTimePlaceHours.innerHTML = RemainsFullHours < 10 ? `0${RemainsFullHours}`: RemainsFullHours;
                currentTimePlaceMin.innerHTML = RemainsFullMin < 10 ? `0${RemainsFullMin}`: RemainsFullMin;
                currentTimePlaceSec.innerHTML = RemainsFullSec < 10 ? `0${RemainsFullSec}`: RemainsFullSec;;
        } 
            else {document.getElementById("happy-new-year").innerHTML = "C НОВЫМ ГОДОМ !!!";
        }
    }
}
let clock = new Clock("clock1");