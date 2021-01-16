class Form{
    constructor(id){
    this.form = document.getElementById(id);
    this.textfields = this.form.querySelectorAll(".b-textfield");
    this.errorMessage = this.form.querySelector(".b-form__message_error");
    this.createEvents();
    }
    checkForm(event){
        this.event.preventDefault();
        let isFormError = false;
        this.textfields.forEach((currentTextfield) => {
            let isTextfieldError = this.checkTextfield(null, currentTextfield )
                if (isTextfieldError){
                    isFormError = true;
                }
        });
        this.errorMessage.classList.toggle("b-form__message_shown", isFormError);

    }
    checkTextfield(event, textfield = null){
        let currentTextfield = textfield ? textfield : event.currentTarget,
            currentValue = currentTextfield.value,
            currentRegExp = new RegExp(REGEXPS[currentTextfield.name]),
            isTextfieldError = ! currentRegExp.test(currentValue)
            ;
        currentTextfield.classList.toggle("b-textfield_error", isTextfieldError);
        return isTextfieldError;
    }
    createEvents(){
        this.form.onsubmit = this.checkForm.bind(this);
        this.textfields.forEach((currentTextfield) => {
            currentTextfield.onblur =this.checkTextfield;
        });
    }


}
let form2 = new Form("form2")