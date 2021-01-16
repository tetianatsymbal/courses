class Calculator{
  constructor(id){
    this.calculatorBlock = $(id);
    this.productList = this.calculatorBlock.find(".product__select");
    this.userMealWeight = this.calculatorBlock.find(".meal-qty");
    this.addBtn = this.calculatorBlock.find(".sub-btn");
    this.menuBlock = this.calculatorBlock.children(".menu");
    this.userMealTemplete = this.calculatorBlock.find(".meal");
    this.mealTitle = this.userMealTemplete.find(".meal__meal-name");
    this.mealWeight = this.userMealTemplete.find(".meal__meal-qty");
    this.mealCalsQty = this.userMealTemplete.find(".meal__cal");
    this.calcBtn = this.calculatorBlock.siblings(".calculate-btn");
    this.totalCals = this.calculatorBlock.siblings(".total").children(".total__cal");
    
    this.createEvents();
  }

  addMeal(){
    let currentOption = this.productList.find(':selected'),
        currentMealTitle = currentOption.text(),
        currentMealCalsQty = currentOption.val(),
        currentMealWeight = this.userMealWeight.val()
      ;

    if(!currentMealWeight || !currentMealCalsQty)
      return;

    let mealCals = Math.round(currentMealCalsQty * (currentMealWeight/100));
    this.mealTitle.text(currentMealTitle);
    this.mealWeight.text(currentMealWeight);
    this.mealCalsQty.text(mealCals);
    this.menuBlock.append(this.userMealTemplete.clone());
  }
  calculateTotalCals(){
    $('.meal:first-child .meal__cal').empty();          

    let totalCalsQty = 0;
    $(".meal__cal").each((index, element) => {
      totalCalsQty += +$(element).text();
    });
    this.total = this.calculatorBlock.siblings(".total");
    this.totalCals.text(totalCalsQty + " ккал");
    this.total.css("display", "flex");
  }
  createEvents(){
    this.addBtn.click(this.addMeal.bind(this));
    this.calcBtn.click(this.calculateTotalCals.bind(this));
  }
}
let calculator = new Calculator ("#meal-calculator");