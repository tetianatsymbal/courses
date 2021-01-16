class Clock {
	constructor(id) {
		this.clock = document.getElementById(id);
		this.init();
		setInterval(this.init.bind(this), 1000);


	}
	init() {
		this.getTimer("days");
		this.getTimer("hours");
		this.getTimer("min");
		this.getTimer("sec");
	}

	getTimer(cssClass){
		const currentTimePlace = this.clock.querySelector(`.${cssClass}`);
		const MS = {
			sec: [60, 1],
			min: [60, 60],
			hours: [24, 3600],
			days: [365, 86400]
		};
		const X = 1000;
		let today = new Date(),
			nY = new Date(2021, 0, 1, 0, 0),
			currentTime = 0;	

		today = Math.trunc((nY - today) / X / MS[cssClass][1]);
		currentTime = today % MS[cssClass][0];

		currentTimePlace.innerText = currentTime < 10 ? `0${currentTime}` : currentTime;
	}
}
let clock = new Clock("clock1");



