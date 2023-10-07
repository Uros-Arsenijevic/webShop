// menu
$(".content").hide();
$(".mobile-menu").click(() => { 
    $(".content").slideToggle();
});

// slider
let imageWidth = 0;

$(".right-Btn").on("click", () => {
    imageWidth += 700;
    if(imageWidth === 2800){
        imageWidth = 0;
    }
    $(".slider-track").css("transform", `translateX(-${imageWidth}px`);
});

$(".left-Btn").click(() => {
    imageWidth -= 700;
    if(imageWidth < 0){
        imageWidth = 2100;
    };
    $(".slider-track").css({transform: `translateX(-${imageWidth}px`});
});

setInterval(() => {
    imageWidth += 700;
    if(imageWidth === 2800){
        imageWidth = 0;
    }
    $(".slider-track").css("transform", `translateX(-${imageWidth}px`);
}, 5000)

