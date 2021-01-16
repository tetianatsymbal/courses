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
        let currentThumb = event.currentTarget,
            currentSmallImg = currentThumb.querySelector("img"),
            currentSmallImgSrc = currentSmallImg.src,
            bigImgSrc = currentSmallImgSrc.replace("small_", "");
        this.bigImg.src = bigImgSrc;
        this.preview.classList.add("b-preview_shown");


        console.log(currentSmallImgSrc);
    }
    closePreview(event){
        console.log(event.target);
        if(event.target.classList.contains("b-preview_shown")){
            this.preview.classList.remove("b-preview_shown");
        }

    }
    createEvents(){
        this.thumbs.forEach((currentThumb) => {
            currentThumb.onclick = this.showBigImg.bind(this);
        });
        this.preview.onclick = this.closePreview.bind(this);

    }
}
let gellery = new Gallery("gallery1");