class Test {
    constructor(id) {
        this.questionBlock = $(id);
        this.question = this.questionBlock.find(".question");
        this.answersBlockTemplete = this.questionBlock.find(".answers");
        this.answerTemplete = this.questionBlock.find(".choice-answer");
        this.nextBtn = this.questionBlock.find(".next-btn");
        this.resultBlock = this.questionBlock.siblings(".result");
        this.userScore = this.resultBlock.find(".score");
        this.questionNum = 0;
        this.score = 0;
        this.result = [];
        this.errorMessage = this.questionBlock.find(".error-msg");

        this.createQuestion();
        this.createAnswers();

        this.createEvents();
    }
    createQuestion() {
        let currentQuestion = this.escapeHtml(data[this.questionNum].question);
        this.question.html(currentQuestion);
    }
    createAnswers() {
        let answers = "";
        data[this.questionNum].answers.forEach((currentAnswer, index) => {
            answers += `<input type="radio" name="answer" value="${index}" id="answer${index}" class="choice"><label for="answer${index}" class="answer">` + this.escapeHtml(currentAnswer) + '</label>';
        });
        this.answerTemplete.html(answers);
        this.answersBlockTemplete.css("display", "flex");
    }
    changeQuestion(event) {
        let questionsLength = data.length;

        let isAnswerExists = this.saveUserAnswer();

        if (isAnswerExists) {
            this.errorMessage.css("display", "none");
            this.questionNum++;

            if (this.questionNum < questionsLength) {
                this.createQuestion();
                this.createAnswers();
            } else {
                this.countResult();
                this.showResult();
            }
        } else {
            this.errorMessage.html("Пожалуйста, выбирете ответ");
            this.errorMessage.css("display", "flex");
        }

    }
    saveUserAnswer() {
        let choice = this.questionBlock.find(".choice");
        let isAnswerExists = false;
        choice.each((index, currentChoice) => {
            if ($(currentChoice).prop("checked")) {
                this.result.push($(currentChoice).val());
                isAnswerExists = true;
            }

        });
        return isAnswerExists;
    }
    countResult() {
        this.result.forEach((currentAnswer, index) => {
            if (data[index].correctAnswerNum == currentAnswer) {
                this.score++;
            }
        });
    }
    showResult() {
        this.questionBlock.remove();
        this.userScore.html(this.score);
        this.resultBlock.css("display", "flex");
    }
    createEvents() {
        this.nextBtn.click(this.changeQuestion.bind(this));
    }
    escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}
let question = new Test("#question-block");