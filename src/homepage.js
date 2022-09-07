//? BURGER 

const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")
const navLinks = document.querySelectorAll(".nav-links li")


burger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle")


    navLinks.forEach((link, index)=>{
        if (link.style.animation){
            link.style.animation = ``
        }
        else{link.style.animation = `nav-links-fade 0.5s ease forwards ${index/7 + 0.4}s`}
    })

    
})

//? STORE SECTION

 const shopContainer = document.getElementById("shopContainer")
 console.log(shopContainer)

 let myStores = [{
    classname:"apple",
    name:"apple",
    img:"homepage/hero-image2.jpg",
    para:"para graph is not a goof way to stay life so whatw ",

 },{
    classname:"jbl",
    name:"jbl",
    jblname:"jblname",
    img:"homepage/hero-image2.jpg",
    para:"para graph is not a goof way to stay life so whatw ",
 },{
    classname:"canon",
    name:"canon",
    img:"homepage/hero-image2.jpg",
    para:"para graph is not a goof way to stay life so whatw ",
 }]

 let generateStore = ()=>{
    return shopContainer.innerHTML = myStores.map((x)=>{
        const {classname, name, img, para, jblname} = x 
        return `
        <div class="store-card">
                <img src=${img} alt="" class="shop-img" width="200">
                <div class="shop-name ${jblname}">${name}</div>
                <p>${para}</p>
                <div class="five-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </div>
                <div class="shop-now ${classname}"><p><a href="v.html"> shop now </a></p></div>
                </div>`
        
            
        
 }).join("");
 }
 generateStore()

 //! STORE SECTION 

 let reviewContainer = document.querySelector(".review-container")
 console.log(reviewContainer)

 
   
