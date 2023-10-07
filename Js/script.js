
/*
let img = document.querySelector("#image")
let button = document.querySelector("button")

// let linkOdImg = img.getAttribute("src");
*/
// let img2 = document.querySelector("#img2");
let params = (new URL(document.location)).searchParams; 
let token = params.get("id");

let product = [
    {   
        id: 1, 
        img: "https://img.gigatron.rs/img/products/large/image6486f9c1e1e44.jpg", 
        naslov: 'XIAOMI Redmi 12C 3/64GB Black',
        price: 125,
    },
    {
        id: 2,
        img: "https://img.gigatron.rs/img/products/large/image644110165e37a.jpg",
        naslov: 'HONOR X7a 4/128GB Midnight Black',
        price: 162,
    },
    {
        id: 3,
        img: "https://img.gigatron.rs/img/products/large/image6409d017633fd.jpg",
        naslov: 'APPLE iPhone 14 Plus 6/256GB Yellow MR6D3SX/A',
        price: 1184,
    },
    {
        id: 4,
        img: "https://img.gigatron.rs/img/products/large/image64466615905cf.jpg",
        naslov: 'NOKIA G11 Plus 4/64GB Blue',
        price: 732,
    },
    {
        id: 5,
        img: "https://img.gigatron.rs/img/products/large/image634035a007d1e.png",
        naslov: 'NOKIA 5710 XA Black',
        price: 99,
    },
    {
        id: 6,
        img: "https://img.gigatron.rs/img/products/large/image6477499d1ee85.jpg",
        naslov: 'OUKITEL WP20 4/32GB Tropical Orange',
        price: 400,
    },  
    {
        id: 7,
        img: "https://img.gigatron.rs/img/products/large/image6412ee2d93224.jpg",
        naslov: 'SAMSUNG Galaxy A14 4/128GB Green',
        price: 250,
    },  
    {
        id: 8,
        img: "https://img.gigatron.rs/img/products/large/image646dc5df14177.jpg",
        naslov: 'HONOR Magic5 PRO 12/512GB Black',
        price: 100,
    },  
]

product.forEach(element => {
    if(+token === element.id){
        let img2 = document.querySelector("#img2");
        let naslov = document.querySelector(".naslov2");

        img2.src = element.img; 
        naslov.innerText = element.naslov;
    }
})