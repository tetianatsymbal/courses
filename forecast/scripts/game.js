(function(){
    const TABLE = {
        "rock" : {
            "rock": 0,
            "scissors": 1,
            "paper": -1
            
        },
        "paper": {
            "rock": 1,
            "scissors": -1,
            "paper": 0
            
        },
        "scissors": {
            "rock": -1,
            "scissors": 0,
            "paper": 1
        }
    };
    const ANSWERS = ["rock", "paper", "scissors"];
    const MESSAGES = {
        "-1" : {
            "ru" : "Вы проиграли",
            "en" : "You lose"
        },
        "0" : {
            "ru" : "Ничья",
            "en" : "Standoff"
        },
        "1" : {
            "ru" : "Вы выиграли",
            "en" : "You won"
        }
    };

    const userAnswer = document.querySelector(".game__select_user-answer");
    const result = document.querySelector(".game__result");
    const userAnswerImg = document.querySelector(".game__user-answer-img");
    const computerAnswerImg = document.querySelector(".game__computer-answer-img");
    const text = document.querySelector(".game__text");
    const errorMessage = document.querySelector(".game__error-message");

    const play = () =>{
        let m = 0,
        n = ANSWERS.length - 1,
        computerAnswerIndex = Math.floor(Math.random() * (n - m + 1)) + m,
        computerAnswer = ANSWERS[computerAnswerIndex],
        currentLang = "ru"
        ;
        if(userAnswer.value){
            errorMessage.style.display = "none";
            result.style.display = "flex";
            userAnswerImg.src = `images/${userAnswer.value}.png`;
            computerAnswerImg.src = `images/${computerAnswer}.png`;
            text.textContent = MESSAGES[TABLE[userAnswer.value][computerAnswer]][currentLang];

        }
        else{
            result.style.display = "none";
            errorMessage.style.display = "block";

        }
        // console.log(userAnswer.value, computerAnswer, TABLE[userAnswer.value][computerAnswer]);
    }
    userAnswer.onchange = play;
}())
