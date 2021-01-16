(function(){
    const goods = document.querySelector("#goods"); //.getElementById("goods")
    const thumbs = goods.querySelectorAll(".thumbs img");
    const bigImg = goods.querySelector(".big-img");
    let prevSmallImg = goods.querySelector(".thumbs img:first-child")
    const showBigImg = (event) => {
        let currentSmallImg = event.target;
        bigImg.src = currentSmallImg.src.replace("/small/", "/big/");
        prevSmallImg.classList.remove("highlight");
        currentSmallImg.classList.add("highlight");
        prevSmallImg = currentSmallImg;

    }
    //prevSmallImg.className = "highlight";
    prevSmallImg.classList.add("highlight");
    thumbs.forEach((currentImg) => {
        currentImg.onclick = showBigImg;
    });
}())