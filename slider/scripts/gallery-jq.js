class Gallery{
    constructor(id){
        this.gallery = $(id);
        this.thumbs = this.gallery.children(".b-picture");
        this.preview = this.gallery.find(".b-preview");
        this.bigImg = this.gallery.find(".b-preview__image");
        this.arrowBtns = this.gallery.find(".b-preview__arrow");
        this.bigImgText = this.gallery.find(".b-preview__text");
        this.currentImgNumPlace = this.gallery.find(".b-preview__currentPlace");
        this.imgsQtyPlace = this.gallery.find(".b-preview__maxPlace");
        this.currentImgNum = 0;
        this.imgsQty = this.thumbs.length;
        this.slideshowBtn = this.gallery.find(".b-preview__slideshowBtn");
        this.isSlideshowStart = false;
        this.currentImgNum = 0;
        this.imgsQty = this.thumbs.length;
        this.slideshowPeriod = 3;
        this.setIntervalId = null;
        this.createEvents()
    }
    showBigImg(event){
        let currentThumb = $(event.currentTarget);
        this.currentImgNum = this.thumbs.index(currentThumb); // метод JQ - порядкoвый номер в выборке елементов
        this.display(currentThumb);
        this.preview.addClass("b-preview_shown");
    }
    display(currentThumb){
        let currentSmallImg = currentThumb.children("img"),
            currentSmallImgSrc = currentSmallImg.attr("src"),
            bigImgSrc = currentSmallImgSrc.replace("small_", "");
        this.bigImg.attr("src", bigImgSrc);
        this.bigImgText.text(currentSmallImg.attr("alt"));
        this.currentImgNumPlace.text(this.currentImgNum + 1);
        this.imgsQtyPlace.text(this.imgsQty);
    }
    closePreview(event){
        if(!event || $(event.target).hasClass("b-preview_shown")){ //classList.contains == hasClass
            this.preview.removeClass("b-preview_shown"); // removeClass =classList. remove
            this.stopSlideshow();
        }
    }
    changeBigImg(event, step){
        let currentBtn = step ? null: $(event.target);
        console.log(currentBtn);
        let dataStep = step ? step : currentBtn.data("step"); // dataset() = data("step")

        this.currentImgNum += + dataStep;
        if (this.currentImgNum >= this.imgsQty){
            this.currentImgNum = 0;
            if(this.isSlideshowStart){
                alert("Вы посмотрели все фото");
                this.closePreview();
            }
        }
        else if(this.currentImgNum < 0){
            this.currentImgNum = this.imgsQty - 1
        }
        
        let currentThumb = this.thumbs.eq(this.currentImgNum); // this.thumbs[this.currentImgNum] = eq(this.currentImgNum); на вход принимаэт номер , а на выходе дает объект
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
    slideshow(){
        if(this.isSlideshowStart){
            this.stopSlideshow();
        }
        else{
            this.isSlideshowStart = true;
            this.slideshowBtn.text("stop");
            this.setIntervalId = setInterval(() => {
                this.changeBigImg(null, 1);
            }, this.slideshowPeriod * 1000)
        }
    }
    stopSlideshow(){
        this.isSlideshowStart = false;
        this.slideshowBtn.text("start");
        clearInterval(this.setIntervalId);
    }
    createEvents(){
        $("body").keyup(this.setHotkeys.bind(this));
        this.thumbs.click(this.showBigImg.bind(this));
        this.preview.click(this.closePreview.bind(this));
        this.arrowBtns.click(this.changeBigImg.bind(this));
        this.slideshowBtn.click(this.slideshow.bind(this));
    }
}
let gellery = new Gallery("#gallery1");