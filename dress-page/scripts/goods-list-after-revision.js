class GoodsList{
    constructor(id){
        this.goods = $(id);
        // this.list = this.goods.children(".cities");
        this.productTemplate = this.goods.children(".product:first-child");
        this.labelDiscount = this.goods.find(".product__discount");
        this.discount = this.goods.find(".product__discount-val");
        this.productImg = this.goods.find(".img");
        this.price = this.goods.find(".description__price");
        this.discountPrice = this.goods.find(".description__discount-price");
        this.title = this.goods.find(".description__text");
        
        this.showGoods();
    }
    showGoods(){
        data.goods.forEach((currentproduct) => {
            this.createProduct(currentproduct.id, currentproduct.fileName, currentproduct.title, currentproduct.price, currentproduct.discount);
            // this.createProduct(currentproduct);
        });
    }
    createProduct(id, fileName, productTitle, productPrice, productDiscount){
    // createProduct(currentproduct){
    //     let {id, fileName, title, price, discount} = currentproduct;
        let discountPrice =   +productPrice - (+productPrice * +productDiscount / 100);

        this.productTemplate.attr("id", id);
        this.productImg.attr("src", `images/goods/${fileName}.jpg`);
        this.title.text(productTitle);
            if (productDiscount == "0"){
                this.labelDiscount.css("display", "none");
                this.discountPrice.css("display", "none");
                this.price.removeClass("description__price_crossed");
            }
            else{
                this.price.addClass("description__price_crossed");
                this.discountPrice.css("display", "inline-block");
                this.discountPrice.text(discountPrice);
                this.labelDiscount.css("display", "block");
            }
        // this.discountPrice.text(discountPrice);
        this.price.text(productPrice);
        this.discount.text(productDiscount);
        this.goods.append(this.productTemplate.clone());
    }
    caclucateDiscount(){

        return discountPrice;
    }
}
let listOfGoods = new GoodsList("#goods-list");