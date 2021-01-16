class Prediction{
    constructor(id){
        this.prediction = document.getElementById(id);
        this.result = this.prediction.querySelector(".result");
        this.cardImg = this.prediction.querySelector(".card");
        this.description = this.prediction.querySelector(".description");
        this.createEvents();
    }
    cartomancy(event){
        let prediction = event.target;
        let m = 0,
        n = CARDS.length - 1,
        cardIndex = Math.floor(Math.random() * (n - m + 1)) + m;
        this.result.style.display = "flex";
        this.cardImg.src = `images/taro/${CARDS[cardIndex].imgFile}.jpg`;
        this.description.innerHTML = `<mark>Значение и описание:</mark> \n ${CARDS[cardIndex].description}`;
    }
    setHotkeys(event){
        if(event.which == 13){
            this.cartomancy(event)
        }
    }
    createEvents(){
        this.prediction.onclick = this.cartomancy.bind(this);
        document.onkeyup = this.setHotkeys.bind(this);
    }
}
let prediction = new Prediction("prediction");