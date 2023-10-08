// menu
$(".content").hide();
$(".mobile-menu").click(() => { 
    $(".content").slideToggle();
});


// login bar
$(".login-btn").click(() => {
    $(".login-form").toggle();
});
$(".btn").click(() => {
    $(".login-form").toggle();
});

// slider
let imageWidth = 0;

$(".right-Btn").on("click", () => {
    imageWidth += 700;
    if(imageWidth === 2800){
        imageWidth = 0;
    };
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
}, 5000);


// user login 
$(".submitButton").click(() => { 
    let username = $(".username").val();
    let password = $(".password").val();

    if(username.length > 0 && password.length > 0){

        let userInfo = {
            username: username,
            password: password,
        }

        let JsonFormat = JSON.stringify(userInfo);
        localStorage.setItem("user",JsonFormat);

        $(".message").html("Uspesno ste se ulogovali")
                     .css("color", "#03C988");
    }else{
        console.log("neradi")
    }

});