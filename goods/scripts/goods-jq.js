class Goods{
    constructor(id){
    this.goods = $(id); //querySelector("#goods"); //.getElementById("goods")
    this.thumbs = this.goods.children(".thumbs").children("img");
    this.bigImg = this.goods.children(".big-img");
    this.prevSmallImg = this.goods.children(".thumbs").children("img:first-child");
    this.oleg = this.goods.children(".thumbss");
    this.createEvents();
    }
    showBigImg(event){
        let currentSmallImg = $(event.target);
        this.bigImg.attr("src", `${currentSmallImg.attr("src").replace("/small/", "/big/")}`);
        this.prevSmallImg.removeClass("highlight");
        currentSmallImg.addClass("highlight");
        this.prevSmallImg = currentSmallImg;
        
    }
    createEvents(){
        this.prevSmallImg.addClass("highlight");
        this.thumbs.click(this.showBigImg.bind(this));
    }
}
let goods = new Goods("#goods");
console.log(goods);