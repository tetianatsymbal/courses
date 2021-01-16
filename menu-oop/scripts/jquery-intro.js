const links = $(".menu a") // querySelectorAll
const content = $(".content"); //document.querySelectorAll("")
const textfield =$(".search .textfield");
const logo = $(".logo");
const menu = $(".menu");
const search = $(".search");

console.log(links);
console.log(links[0], $(links[0]));
console.log(content);
// считивание значчение из парного тега

console.log(content.text()); //innerText
console.log(content.html());

//запись значений в парный тег
content.html(`<strong>New</strong> text`); 

//считывание елементов управления
console.log(textfield.val()) //value

//запись значений в елементы управления
textfield.val("JS");

//запись в атрибут тега
logo.attr("alt", "jQuery"); // logo.alt = "jQuery"

 // считавания с атрибута тега
 console.log(logo.attr("src"));

 //считавания свойства объекта(в соотведствие тегу)
//.tagName
console.log(menu.prop("tagName"));


const showQuery = (event) =>{
    event.preventDefault();
    content.text(textfield.val());
}

//назначение обрабочика на событие
search.submit(showQuery);
