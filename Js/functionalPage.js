// menu
$(".content").hide();
$(".mobile-menu").click(() => { 
    $(".content").slideToggle();
});

// adding class for hover effect on buy-button
$(".buy-Btn").addClass("bttn-jelly bttn-md")

// login bar
$(".login-btn").click(() => {
    $(".login-form").toggle();
});
$(".btn").click(() => {
    $(".login-form").toggle();
    $(".submitButton").removeClass("animate__shakeX");
    $(".message").html("");

    stateOfForm("normal");
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

        stateOfForm("Ok");

        $(".username").val("");
        $(".password").val("");
    }else{
        $(".message").html("Greska")
                     .css("color", "red");

        stateOfForm("error");
    }       

});

function stateOfForm(state) {
    if(state === "error"){
        $(".submitButton").addClass("animate__shakeX bttn-danger")
                            .removeClass("bttn-warning bttn-success")
                            .html('<i class="fa-regular fa-circle-xmark"></i>')
                            .css({ borderColor: "red"});
        $(".form h2").css("color", "red");
    }
    if(state === "Ok"){
        $(".submitButton").removeClass("bttn-warning bttn-danger")
                     .addClass("bttn-success")
                     .html('<i class="fa-solid fa-check"></i>')
                     .css({ borderColor: "#03C988"});
        $(".form h2").css("color", "#03C988");
    }
    if(state === "normal"){
        $(".submitButton").removeClass("bttn-success bttn-danger")
                     .addClass("bttn-warning")
                     .html('<i class="fa-solid fa-user"></i>LogIn')
                     .css({ borderColor: "#feab3a"});
        $(".form h2").css("color", "#feab3a");
    }
}
