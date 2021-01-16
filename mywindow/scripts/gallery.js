class Gallery{
    constructor(id){
        this.gallery = document.getElementById(id);
        this.thumbs = this.gallery.querySelectorAll(".b-picture");
        this.preview = this.gallery.querySelector(".b-preview");
        this.bigImg = this.gallery.querySelector(".b-preview__image");
        this.arrowBtns = this.gallery.querySelectorAll(".b-preview__arrow");
        this.bigImgText = this.gallery.querySelector(".b-preview__text");
        this.currentImgNumPlace = this.gallery.querySelector(".b-preview__currentPlace");
        this.imgsQtyPlace = this.gallery.querySelector(".b-preview__maxPlace");
        this.currentImgNum = 0;
        this.imgsQty = this.thumbs.length;
        this.createEvents();
    }
    showBigImg(event){
        let currentThumb = event.currentTarget;
        this.currentImgNum = [...this.thumbs].indexOf(currentThumb);
        this.display(currentThumb);

        this.preview.classList.add("b-preview_shown");
    }
    display(currentThumb){
        let currentSmallImg = currentThumb.querySelector("img"),
            currentSmallImgSrc = currentSmallImg.src,
            bigImgSrc = currentSmallImgSrc.replace("small_", "");
    this.bigImg.src = bigImgSrc;
    this.bigImgText.innerText = currentSmallImg.alt;

    this.currentImgNumPlace.innerText = this.currentImgNum + 1;
    this.imgsQtyPlace.innerText = this.imgsQty;

    }
    closePreview(event){
        if(!event || event.target.classList.contains("b-preview_shown")){
            this.preview.classList.remove("b-preview_shown");
        }
    }
    changeBigImg(event, step){
        let currentBtn = step ? null: event.target;
        console.log(currentBtn);
        let dataStep = step ? step : currentBtn.dataset.step;

        this.currentImgNum += + dataStep;
        if (this.currentImgNum >= this.imgsQty){
            this.currentImgNum = 0;
        }
        else if(this.currentImgNum < 0){
            this.currentImgNum = this.imgsQty - 1
        }
        
        let currentThumb = this.thumbs[this.currentImgNum];
        console.log(this.currentImgNum);
        this.display(currentThumb);
    }
    setHotkeys(event){
        // console.log(event.which, event.altKey, event.ctrlKey, event.shiftKey)
        if(event.which ==27){
            this.closePreview();
        }
        else if(event.which ==37){
            this.changeBigImg(null, -1)
        }
        else if(event.which ==39){
            this.changeBigImg(null, 1)
        }
    }
    createEvents(){
        document.querySelector("body").onkeyup = this.setHotkeys.bind(this)
        this.thumbs.forEach((currentThumb) => {
            currentThumb.onclick = this.showBigImg.bind(this);
        });
        this.preview.onclick = this.closePreview.bind(this);
        this.arrowBtns.forEach((currentBtns) => {
            currentBtns.onclick = this.changeBigImg.bind(this);
        });

    }
}
let gellery = new Gallery("gallery1");