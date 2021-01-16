class Cookies{
    constructor(id){
        this.cookiesWindow = document.getElementById(id);
        this.closeBtn = this.cookiesWindow.querySelector(".cookies-window__btn");
        this.setTimeoutId = null;
        this.createEvents();
        setTimeout(() => this.showCookiesWindow(), 3000);
    }
    showCookiesWindow(){
        this.cookiesWindow.classList.add("cookies-window_shown");
        this.setTimeoutId = setTimeout(() => this.closeCookiesWindow(), 5000);
    }
    closeCookiesWindow(){
        this.cookiesWindow.classList.remove("cookies-window_shown");
        clearTimeout(this.setTimeoutId);
    }
    createEvents(){
        this.closeBtn.onclick = this.closeCookiesWindow.bind(this);
    }
}
let cookies = new Cookies("cookies");