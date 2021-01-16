(function(){
    const smallImg = document.querySelector(".imgblock__img-small");
    const bigImg = document.querySelector(".imgblock__img-big");
    const bigImgBlock = document.querySelector(".imgblock__big");
    console.log(smallImg.src);

    const imgZoom = (event) =>{
        imgPath = smallImg.src;
        push = event.target;
        if(push){
            bigImgBlock.style.display = "block";
            imgPath = imgPath.replace("images/zoom-img/", "images/zoom-img/big/");
            bigImg.src = imgPath;   
        }
        else{
            bigImgBlock.style.display = "none";
        }
    }
    smallImg.onclick = imgZoom;
}());