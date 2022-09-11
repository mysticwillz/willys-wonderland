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


 let myStores = [{
    classname:"apple",
    name:"Apple",
    img:"https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png",
    para:"para graph is not a goof way to stay life so whatw ",
    link:"../markups/applestore.html",

 },{
    classname:"jbl",
    name:"jbl",
    jblname:"jblname",
    img:"https://www.pngkey.com/png/full/306-3060801_logo-jbl-png-jbl-png.png",
    para:"para graph is not a goof way to stay life so whatw ",
    link:"../markups/jblstore.html",
 },{
    classname:"canon",
    name:"Canon",
    img:"https://cdn.freebiesupply.com/images/large/2x/canon-inc.-logo-png-transparent.png",
    para:"para graph is not a goof way to stay life so whatw ",
    link:"../markups/canonstore.html",
 }]

 let generateStore = ()=>{
    return shopContainer.innerHTML = myStores.map((x)=>{
        const {classname, name,link, img, para, jblname} = x 
        return `
        <a href="${link}" class="store-div-link"> <div class="store-card">
                <img src=${img} alt="" class="shop-img" width="180" height="200">
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
                </div> </a>`
        
            
        
 }).join("");
 }
 generateStore()

 //! review SECTION 

 let reviewContainer = document.querySelector(".review-container");
 let right = document.getElementById("right")
 let left = document.getElementById("left")
 
 let reviews = [{
    p:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Laudantium adipisci, tempora numquam, soluta cumque repellendus 
    asperiores consequatur consectetur tenetur molestiae eius eveniet exercitationem modi ratione,
     quod alias. 
    Totam sapiente quaerat doloremque iusto aliquam repellat expedita. Rerum
     perspiciatis mollitia sunt iure.`,
    nameEl: "Heroni i",
    img: "https://www.freepnglogos.com/uploads/businessman-png/business-png-businessman-png-image-private-32.png",
 },{
    p:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Laudantium adipisci, tempora numquam, soluta cumque repellendus 
    asperiores consequatur consectetur tenetur molestiae eius eveniet exercitationem modi ratione,
     quod alias. 
    Totam sapiente quaerat doloremque iusto aliquam repellat expedita. Rerum
     perspiciatis mollitia sunt iure.`,
    nameEl: "Patrick b",
    img: "https://www.pngmart.com/files/15/Smiling-Business-Man-Standing-PNG-Image.png",
 },{
    p:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Laudantium adipisci, tempora numquam, soluta cumque repellendus 
    asperiores consequatur consectetur tenetur molestiae eius eveniet exercitationem modi ratione,
     quod alias. 
    Totam sapiente quaerat doloremque iusto aliquam repellat expedita. Rerum
     perspiciatis mollitia sunt iure.`,
    nameEl: "Zuri n",
    img: "https://www.pngkey.com/png/full/27-276852_nk-money-king-business-man-transparent.png",
 },{
    p:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Laudantium adipisci, tempora numquam, soluta cumque repellendus 
    asperiores consequatur consectetur tenetur molestiae eius eveniet exercitationem modi ratione,
     quod alias. 
    Totam sapiente quaerat doloremque iusto aliquam repellat expedita. Rerum
     perspiciatis mollitia sunt iure.`,
    nameEl: "Viner o",
    img: "https://www.pngall.com/wp-content/uploads/2016/05/Man-Download-PNG.png",
 }]

 

let index = 0
 function changeReview(){
    const {p, nameEl,img} = reviews[index]
    let item = `
    <div  class="review-card">
    <i class="fa-solid fa-quote-left"></i>

     <p >${p} </p>

                  
         <h3>${nameEl}</h3
         
     <i class="fa-solid fa-quote-right"></i>

</div>
<img src=${img} alt="" width="300px" height="350px">

    `
   reviewContainer.innerHTML=item;
  

    if (index < reviews.length-1){
        index++
    }
    else {index = 0}
    console.log("function is functtional")
    
 };
 changeReview()

 setInterval(()=>{
    changeReview()
 },7000)

 



 
   
