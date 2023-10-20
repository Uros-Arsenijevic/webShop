$(".content").hide();
$(".mobile-menu").click(() => { 
    $(".content").slideToggle();
});

let imageWidth = 0;
let allImgElement = document.querySelectorAll(".track img");
let i = 0
$(".rightBtn").on("click", () => {
    imageWidth += 500;
    i++
    if(allImgElement[i] === undefined){
        imageWidth = 0;
        i = 0
    }
    $(".track").css("transform", `translateX(-${imageWidth}px`);
});

$(".leftBtn").click(() => {
    imageWidth -= 500;
    i--
    if(allImgElement[i] === undefined){
        imageWidth = 500 * (allImgElement.length - 1);
        i = allImgElement.length - 1;
    }
    $(".track").css({transform: `translateX(-${imageWidth}px`});
});
