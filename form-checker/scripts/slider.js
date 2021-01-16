class Slider{
    constructor(id){
        this.slider = $(id);
        this.btns = this.slider.children(".slider__btn");
        this.sliderBox = this.slider.children(".slider__slides");
        this.slides = this.sliderBox.children(".slides__slide");
        this.slidesQty = this.slides.length;
        this.sliderWidth = this.sliderBox.width();
        this.slidesLength = this.sliderWidth * this.slidesQty;
        this.init();
        this.createEvents();
    }
    init(){
        this.sliderBox.find(".slides__slide:last-child").prependTo(this.sliderBox);
        this.sliderBox.css({width: this.slidesLength, marginLeft: - this.sliderWidth});
    }
    move(event){
        let currentBtn = $(event.currentTarget),
            step = currentBtn.data("step")
            ;
        this.sliderBox.animate({left: this.sliderWidth * step}, 200, () => {
                if(step < 0){
                    this.sliderBox.find(".slides__slide:last-child").prependTo(this.sliderBox);
                }
                else{
                    this.sliderBox.find(".slides__slide:first-child").appendTo(this.sliderBox);
                }
            this.sliderBox.css("left", "0");
        });           
    }
    createEvents(){
        this.btns.click(this.move.bind(this));
    }
}
let slider1 = new Slider("#slider");