class Calculator{
    constructor(id){
        this.form =$(id);
        this.calcBtn = this.form.children(".calc_btn"); //children - объекты первого уровня вложености
        this.num1 = this.form.children(".num1");
        this.num2 = this.form.children(".num2");
        this.currentOperator = this.form.children(".operators");
        this.result = this.form.children(".result");
        this.error = this.form.children(".error");

        this.calcBtn.click(this.count.bind(this));
    }
    count(){
        let operator = this.currentOperator.val();
        this.setStyles("none", "none");

        if (operator == "+") {
            this.result.val( ( + this.num1.val()) + (+ this.num2.val()) );
        }
        else if (operator == "-") {
            this.result.val( this.num1.val() - this.num2.val() );
        }
        else if (operator == "*") {
            this.result.val( this.num1.val() * this.num2.val() );
        }
        else if (operator == "/") {

            if(+ this.num2.val()){
                this.result.val( this.num1.val() / this.num2.val() );
            }
            else{
                this.setStyles("0 0 2px #ff0000", "inline");
            } 
        }
        else if (operator == "^") {
            this.result.val( this.num1.val() ** this.num2.val() );
        }
        else if (operator == "%") {
            this.result.val( this.num1.val() % this.num2.val() );
        }
    }
    setStyles(num2Style, errorStyle){
        this.num2.css("boxShadow", num2Style); //style.boxShadow
        this.error.css("display", errorStyle);
    }
}
let calc = new Calculator("#calc_form");