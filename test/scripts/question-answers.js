class Test{
  constructor(id){
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
    
    this.createQuestion();
    this.createAnswers();

    this.createEvents();
  }
  createQuestion(){
    let currentQuestion = this.escapeHtml(data[this.questionNum].question);
    this.question.html(currentQuestion);
  }
  createAnswers(){
    let answers = "";
    data[this.questionNum].answers.forEach((currentAnswer, index) => {
      answers += `<input type="radio" name="answer" value="${index}" id="answer${index}" class="choice"><label for="answer${index}" class="answer">` + this.escapeHtml(currentAnswer) + '</label>';
    });
    this.answerTemplete.html(answers);
    this.answersBlockTemplete.css("display", "flex");
  }
  changeQuestion(event){
    let questionsLength = data.length;
    
    this.saveUserAnswer(); 
    
    this.questionNum++;

    if (this.questionNum < questionsLength){
      this.createQuestion();
      this.createAnswers();
    }
    else{
      this.countResult();
      this.showResult();
    }
  }
  saveUserAnswer(){
    let choice = this.questionBlock.find(".choice");
    choice.each((index, currentChoice) =>{
      if ($(currentChoice).prop("checked")){
        this.result.push($(currentChoice).val());
        // КАК НЕ ПЕРЕКЛЮЧАТЬ ВОПРОС, ЕСЛИ ХОТЯ БЫ ОДИН С ОТВЕТОВ НЕ ВЫБРАН?
        // if([...choice].filter(currentChoice => currentChoice.checked).length == 0){
        //   this.errorMessage = this.questionBlock.find(".error-msg");
        //   this.errorMessage.html("Пожалуйста, выбирете ответ").css("display", "flex");
        //   this.nextBtn.css("pointer-events", "none");
        // }
      }
    }); 
  }
  countResult(){
    this.result.forEach((currentAnswer, index) => {
      if(data[index].correctAnswerNum == currentAnswer){
        this.score++;
      }
    });
  }
  showResult(){
    this.questionBlock.remove();
    this.userScore.html(this.score);
    this.resultBlock.css("display", "flex");
  }
  createEvents(){
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