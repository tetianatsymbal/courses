(function(){
    const menu = document.getElementById("menu1");
    const menuItems = menu.querySelectorAll(".b-menu__item");
    const toggleMenu = (event) => {
        //console.log(event.target, event.currentTarget);
        let currentItem = event.currentTarget,
            currentSubMenu = currentItem.querySelector("ul");
        menuItems.forEach((currentItem) => {
            let currentSubMenu = currentItem.querySelector("ul");
            if(currentSubMenu){
                currentSubMenu.classList.remove("b-submenu_shown");
            }
        });
            if(currentSubMenu){
                currentSubMenu.classList.toggle("b-submenu_shown");
            }
    }
    menuItems.forEach((currentItem) => {
        currentItem.onclick = toggleMenu
    });
}())