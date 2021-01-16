class SlideShow{
    constructor(id){
        this.backgroundElement = document.getElementById(id);
        this.bgList = [ // length = 4
            'first', // 0
            'second', // 1
            'third', // 2
            'fourth' // 3
        ]
        this.currentImage = 0;
        setInterval(() => this.changeBackground(), 2000);
    }
    changeBackground(){
        this.backgroundElement.classList.remove('bg-' + this.bgList[this.currentImage]);

        this.currentImage++;
        if(this.currentImage == this.bgList.length)
            this.currentImage = 0;

        this.backgroundElement.classList.add('bg-' + this.bgList[this.currentImage]);
    }
    changeBg(){
        this.backgroundElement.style.backgroundImage = 'url(./images/1.jpg)';
        console.log("what");
    }

}
let slideShow = new SlideShow("bg");