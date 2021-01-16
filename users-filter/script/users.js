class UserList{
    constructor(id){
        this.users = $(id);
        this.list = this.users.children(".users");

        this.loadFromJSON();
    }
    loadFromJSON(){
        $.getJSON(USERS_LIST_URL, (usersData) =>{
            let users = "";
            usersData.forEach((userData) =>{
                users += this.createUserTemplate(userData.firstName, userData.lastName, userData.dob)
            });
            this.list.html(users);
            localStorage.setItem("users", JSON.stringify(usersData));
        });
    }
    createUserTemplate(firstName, lastName, dob){
        return `<div class="user">
                    <h2 class="first-last-name">${firstName} ${lastName}</h2>
                    <em class="dob">${dob}</em>
                </div>`;
    }
}
let ul = new UserList("#users");