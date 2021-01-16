class UserList{
    constructor(id){
        this.users = $(id);
        this.list = this.users.children(".users");
        this.months = this.users.children(".months");
        this.sortBtn = this.users.find(".sort-btn");
        this.sortList = this.users.find(".sort-list");
        this.sortDirection = this.users.find(".sort-direction");

        // this.loadFromJSON();
        this.loadFromLS("", "firstName", "asc");
        this.createMonthsList();
        this.sortBtn.click(this.sortUsers.bind(this));
    }
    loadFromJSON(){
        $.getJSON(USERS_LIST_URL, (usersData) =>{
            let users = "";
            usersData.forEach((userData) =>{
                users += this.createUserTemplate(userData.firstName, userData.lastName, userData.dob);
            });
            this.list.html(users);
            localStorage.setItem("users", JSON.stringify(usersData));
        });
    }
    loadFromLS(monthNum, sortType, sortDirection){
        let usersData = JSON.parse(localStorage.getItem("users")),
            users = "";
            
            if(monthNum){
                usersData = usersData.filter((usersData) => {
                    return getDateInfo(usersData.dob, "-")[1] == monthNum;
                });
            }

            if(sortDirection == "asc"){
                usersData.sort((a, b) => {
                    return a[sortType] > b[sortType] ? 1 : -1;
                })
            }
            else if(sortDirection == "desc"){
                usersData.sort((b, a) => {
                    return a[sortType] > b[sortType] ? 1 : -1;
                })
            }


        usersData.forEach((userData) =>{
            // if(monthNum){
            // }
            // else{
                users += this.createUserTemplate(userData.firstName, userData.lastName, userData.dob);  
        });
        this.list.html(users);
    }
    createUserTemplate(firstName, lastName, dob){
        return `<div class="user">
                    <h2 class="first-last-name">${firstName} ${lastName}</h2>
                    <em class="dob">${dob}</em>
                </div>`;
    }
    createMonthsList(){
        let months = "";
        MONTHS.forEach((currentMonth, monthNum) => {
            months +=`<a href="#" data-num ="${monthNum < 9 ? "0" + (monthNum + 1) : monthNum + 1}" class="month">${currentMonth}</a> | `;
        });
        months +=`<a href="#" class="month">All</a>`;
        this.months.html(months);
        this.months.children(".month").click(this.showUsersByMonth.bind(this));
    }
    showUsersByMonth(event){
        event.preventDefault();
        const currentMonth = $(event.currentTarget);
        const currentMonthNum = currentMonth.data("num");
        this.months.children("a").removeClass("current-month");
        currentMonth.addClass("current-month");
        this.loadFromLS(currentMonthNum);
    }
    sortUsers(){
        const sortType = this.sortList.val();
        const sortDirection = this.sortDirection.val();
        const currentMonthNum =  this.months.children(".current-month").data("num");

        this.loadFromLS(currentMonthNum, sortType, sortDirection);
    } 
}
let ul = new UserList("#users");