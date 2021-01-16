class Form{
    constructor(id){
    this.form = $(id);
    this.textfields = this.form.find(".b-textfield");
    this.errorMessage = this.form.children(".b-form__message_error");
    this.createEvents();
    }
    checkForm(event){
        event.preventDefault();
        let isFormError = false;
        this.textfields.each((i, currentTextfield) => {
            let isTextfieldError = this.checkTextfield(null, $(currentTextfield));
                if (isTextfieldError){
                    isFormError = true;
                }
        });
        this.errorMessage.toggleClass("b-form__message_shown", isFormError);

    }
    checkTextfield(event, textfield = null){
        let currentTextfield = textfield ? textfield : $(event.currentTarget),
            currentValue = currentTextfield.val(),
            currentRegExp = new RegExp(REGEXPS[currentTextfield.attr("name")]),
            isTextfieldError = ! currentRegExp.test(currentValue)
            ;
        currentTextfield.toggleClass("b-textfield_error", isTextfieldError);
        return isTextfieldError;
    }
    createEvents(){
        this.form.submit(this.checkForm.bind(this));
        this.textfields.blur(this.checkTextfield);
    }
}
let form2 = new Form("#form2");