$(".content").hide();
$(".mobile-menu").click(() => { 
    $(".content").slideToggle();
});

// slider
let imageWidth = 0;
let allImgElement = document.querySelectorAll(".track img");
let i = 0;

$(".rightBtn").on("click", () => {
    imageWidth += 500;
    i++;
    if(allImgElement[i] === undefined){
        imageWidth = 0;
        i = 0;
    };
    $(".track").css("transform", `translateX(-${imageWidth}px`);
});

$(".leftBtn").click(() => {
    imageWidth -= 500;
    i--;
    if(allImgElement[i] === undefined){
        imageWidth = 500 * (allImgElement.length - 1);
        i = allImgElement.length - 1;
    };
    $(".track").css({transform: `translateX(-${imageWidth}px`});
});

// brojac
$(".plus").click(() => {
    let quantityOfProducts = +$('.quantity').text();
    quantityOfProducts++;
    $(".quantity").text(quantityOfProducts);
});

$(".minus").click(() => {
    let quantityOfProducts = +$('.quantity').text();
    quantityOfProducts--;
    if(quantityOfProducts < 1){
        quantityOfProducts = 1;
    };
    $(".quantity").text(quantityOfProducts);
});

// add in cart btn

$(".addInCart").click(() => {
    let params = (new URL(document.location)).searchParams; 
    let token = params.get("id");

    // cena proizvoda 
    let price = $(".product-price").text();
    price = +price.slice(0, price.length - 1);
    // kolicina proizvoda
    let quantity = $(".quantity").text()
    // slika od proizvoda
    let picturePriduct = $(".track img:first-child");

    // objekat sa svim informacijama o proizvodu
    let product = {
        picturePriduct: picturePriduct[0].src,
        price: price,
        quantity: +quantity,
    };

    localStorage.setItem(`mobile${token}`, JSON.stringify(product));

    $('.functional-bar span').text('Vas proizvod je dodat u korpu');
});