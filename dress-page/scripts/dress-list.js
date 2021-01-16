class GoodsList{
    constructor(id){
        this.goods = $(id);  
        this.productTemplate = this.goods.children(".product:first-child");
        this.labelBestseller = this.goods.find(".product__bestseller");
        this.productImg = this.goods.find(".img");
        this.price = this.goods.find(".description__price");
        this.discountPrice = this.goods.find(".description__discount-price");
        this.color = this.goods.find(".description__color-val")
        this.title = this.goods.find(".description__text");
        this.filterByColor = this.goods.siblings(".filter").children('.filter__color');
        
        this.showGoods();
        this.createEvents();
    }
    showGoods(color){
        data.dresses.forEach((currentproduct) => {
            if(!color || color == currentproduct.color)
                this.createProduct(currentproduct.id, currentproduct.fileName, currentproduct.title, currentproduct.color, currentproduct.price,currentproduct.discount, currentproduct.bestseller);
        });
    }
    createProduct(id, fileName, productTitle, productColor, productPrice, productDiscount, isBestseller){
        let discountPrice = +productPrice - (+productPrice * +productDiscount / 100);

        this.productTemplate.attr("id", id);
        this.productImg.attr("src", `images/dress/${fileName}.jpg`);
        this.title.text(productTitle);
        this.price.text(productPrice +`$`);
        this.color.text(productColor);

        if (productDiscount == 0){
            this.price.removeClass("description__price_crossed");
            this.discountPrice.css("display", "none");
        }
        else{
            this.price.addClass("description__price_crossed");
            this.discountPrice.css("display", "inline-block");
            this.discountPrice.text(discountPrice +`$`);
        }

        if(isBestseller){
            this.labelBestseller.css("display", "block");
        }
        else{
            this.labelBestseller.css("display", "none");
        }

        this.goods.append(this.productTemplate.clone());
    }
    colorFilter(){
        let color = this.filterByColor.val();
        this.goods.html(this.productTemplate);
        this.showGoods(color);
    }
    createEvents(){
        this.filterByColor.change(this.colorFilter.bind(this));
    }
}
let listOfGoods = new GoodsList("#goods-list");