(function(){
    const menu = $("#menu1");
    const menuItems = menu.children(".b-menu__item");

    const toggleMenu = (event) =>{
        let currentItem = $(event.currentTarget),
        currentSubMenu = currentItem.children("ul");
        // //addClass === classList.add()
        // menuItems.children("ul").removeClass("b-submenu_shown");  // //classList.remove("b-submenu_shown")
        // currentSubMenu.toggleClass("b-submenu_shown");// //classList.toggle()
        menuItems.children("ul").slideUp();
        currentSubMenu.slideToggle();
    }
    
    menuItems.click(toggleMenu);
}())