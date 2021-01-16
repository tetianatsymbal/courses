class Calculator{
    constructor(id){
        this.form =document.getElementById(id);
        this.calcBtn = this.form.querySelector(".calc_btn");
        this.num1 = this.form.querySelector(".num1");
        this.num2 = this.form.querySelector(".num2");
        this.currentOperator = this.form.querySelector(".operators");
        this.result = this.form.querySelector(".result");
        this.error = this.form.querySelector(".error");

        this.calcBtn.onclick = this.count.bind(this);
    }
    count(){
        let operator = this.currentOperator.value;
        this.setStyles("none", "none");

        if (operator == "+") {
            this.result.value = ( + this.num1.value) + (+ this.num2.value);
        }
        else if (operator == "-") {
            this.result.value = this.num1.value - this.num2.value;
        }
        else if (operator == "*") {
            this.result.value = this.num1.value * this.num2.value;
        }
        else if (operator == "/") {

            if(+ this.num2.value){
                this.result.value = this.num1.value / this.num2.value;
            }
            else{
                this.setStyles("0 0 2px #ff0000", "inline");
            } 
        }
        else if (operator == "^") {
            this.result.value = this.num1.value ** this.num2.value;
        }
        else if (operator == "%") {
            this.result.value = this.num1.value % this.num2.value;
        }
    }
    setStyles(num2Style, errorStyle){
        this.num2.style.boxShadow = num2Style;
        this.error.style.display = errorStyle;
    }
}
let calc = new Calculator("calc_form");