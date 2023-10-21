let params = (new URL(document.location)).searchParams; 
let token = params.get("id");

// proizvodi
let product = [
    {   
        id: 1, 
        img1: "https://img.gigatron.rs/img/products/large/image6486f9c1e1e44.jpg",
        img2: "https://img.gigatron.rs/img/products/large/image64eca1ead2b11.jpg",
        img3:"https://img.gigatron.rs/img/products/large/image6486f9c2e0559.jpg",
        img4: "https://img.gigatron.rs/img/products/large/image6486f9c367a99.jpg",
        naslov: 'XIAOMI Redmi 12C 3/64GB Blue',
        price: 125,
    },
    {
        id: 2,
        img1: "https://img.gigatron.rs/img/products/large/image644110165e37a.jpg",
        img2:'https://img.gigatron.rs/img/products/large/image64411016bf47f.jpg',
        img3:"https://img.gigatron.rs/img/products/large/image644110172979a.jpg",
        img4: "https://img.gigatron.rs/img/products/large/image64411017895ed.jpg",
        naslov: 'HONOR X7a 4/128GB Midnight Black',
        price: 162,
    },
    {
        id: 3,
        img1: "https://img.gigatron.rs/img/products/large/image6409d017633fd.jpg",
        img2:'https://img.gigatron.rs/img/products/large/image6409d017d8124.jpg',
        img3:"https://img.gigatron.rs/img/products/large/image6409d01846585.jpg",
        naslov: 'APPLE iPhone 14 Plus 6/256GB Yellow MR6D3SX/A',
        price: 1184,
    },
    {
        id: 4,
        img1: "https://img.gigatron.rs/img/products/large/image64466615905cf.jpg",
        img2:'https://img.gigatron.rs/img/products/large/image64466616070a8.jpg',
        img3:"https://img.gigatron.rs/img/products/large/image644666165faa5.jpg",
        naslov: 'NOKIA G11 Plus 4/64GB Blue',
        price: 732,
    },
    {
        id: 5,
        img1: "https://img.gigatron.rs/img/products/large/image634035a007d1e.png",
        img2:'https://img.gigatron.rs/img/products/large/image634035a071be1.jpg',
        img3:"https://img.gigatron.rs/img/products/large/image634035a0d246f.jpg",
        img4: "https://img.gigatron.rs/img/products/large/image634035a13a0f8.jpg",
        naslov: 'NOKIA 5710 XA Black',
        price: 99,
    },
    {
        id: 6,
        img1: "https://img.gigatron.rs/img/products/large/image6477499d1ee85.jpg",
        img2:'https://img.gigatron.rs/img/products/large/image6477499d91976.jpg',
        naslov: 'OUKITEL WP20 4/32GB Tropical Orange',
        price: 400,
    },  
    {
        id: 7,
        img1: "https://img.gigatron.rs/img/products/large/image6412ee2d93224.jpg",
        img2:'https://img.gigatron.rs/img/products/large/image6412ee2e0d388.jpg',
        img3:"https://img.gigatron.rs/img/products/large/image6412ee2e70f46.jpg",
        img4: "https://img.gigatron.rs/img/products/large/image6412ee2ecda71.jpg",
        naslov: 'SAMSUNG Galaxy A14 4/128GB Green',
        price: 250,
    },  
    {
        id: 8,
        img1: "https://img.gigatron.rs/img/products/large/image646dc5df14177.jpg",
        img2:'https://img.gigatron.rs/img/products/large/image643e7c82df037.jpg',
        img3:"https://img.gigatron.rs/img/products/large/image643e7c83bc554.jpg",
        img4: "https://img.gigatron.rs/img/products/large/image643e7c8421cae.jpg",
        naslov: 'HONOR Magic5 PRO 12/512GB Black',
        price: 100,
    },  
];


product.forEach(element => {
    if(+token === element.id){
        let productImgTrack = document.querySelector(".track");
        let smallPictures = document.querySelector(".small-pictures");

        let naslov = document.querySelector(".naslov2");
        let pageName = document.querySelector(".namephone");
        let productPrice = document.querySelector(".product-price")

        for(let i = 0; i < 5; i++){
            // kreiranje img tagova za slike odvojenog proizvoda
            let createImgElement = document.createElement("img");

            if(element[`img${i}`] !== undefined){
                createImgElement.src = element[`img${i}`];
                productImgTrack.appendChild(createImgElement);
            };
        };
        
        pageName.innerHTML = element.naslov;
        naslov.innerText = element.naslov;
        productPrice.innerHTML = `${element.price}&dollar;` 
    }
})


let addInFavoriteBtns = document.querySelectorAll(".add-favorite-btn");
let favoriteItem = document.querySelector('#favoriteElement');

for (const i in addInFavoriteBtns) {
    // dodavanje id-a na sve addfavorite btn
    addInFavoriteBtns[i].id = +i + 1;
    
    addInFavoriteBtns[i].onclick = () => {
        setTimeout(() => {

            // ovaj kod jos nije zavrsen
            let favoriteItemId = localStorage.getItem("ProductID");
            favoriteItemId = JSON.parse(favoriteItemId);

        }, 100);
    };

};

// $(document).ready(() => {
//     let element = localStorage.getItem("ProductID");
//     element = JSON.parse(element);

//     product.forEach(singleElement => {
//         if(+element.includes(`${singleElement.id}`)){
                
//                 let element = $(".hiddenMobile").clone();
//                 element.find('.mobile-name')
//                             .html("test123");
//                 element.removeClass("hiddenMobile");
//                 $("body").append(element);

                            
//         }
//     });
// });