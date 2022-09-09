const appleDiv = document.getElementById("main")
const jblDiv = document.getElementById("jbl")
const canonDiv = document.getElementById("canon")


     let basket = JSON.parse(localStorage.getItem("DATA")) ||[];

let generateItems = (storeDiv, storeArray)=>{
    storeDiv.innerHTML =  storeArray.map((x)=>{
        const { id, img, name, price, para} = x
        let search = basket.find((x)=>x.id===id) || []
        
        return `<div class="container" id=product-${id}>
        <img src=${img} alt="" height="200" width="200">
        <div class="name">${name}</div>
        <p class="para">
           ${para}
        </p>
        
            <div class="color">
                <p>color</p>
                <div>
                    <i  class="fa fa-circle" aria-hidden="true" id="mac-one"  ></i>
                    <i class="fa fa-circle" aria-hidden="true" id="mac-two"></i>
                    <i class="fa fa-circle" aria-hidden="true" id="mac-three"></i>
                </div>
            </div>
            <div class="price-container">
                <p class="price">$ ${price}</p>
                <div>
                    <i class="fa fa-minus" aria-hidden="true" onclick="decrement(${id})"></i>
                    <p  id="${id}" class="item-count">${search.item===undefined ? 0 : search.item} </p>
                    <i class="fa fa-plus" aria-hidden="true" onclick="increment(${id})"></i>
                </div>
            </div>
            <button onclick="addToTask(${id})" class="button">add to cart</button>
    
    </div>`
    

    }).join("")


}


   
    generateItems(jblDiv,jblStore)
   







  
let increment = (id)=>{
    let specificItem = id
    let findItem = basket.find((x)=>x.id===specificItem.id)
    if(findItem=== undefined){
        basket.push({
            id:specificItem.id,
            item:1
        })
    }
    else(findItem.item++);

  


    localStorage.setItem("DATA", JSON.stringify(basket))
    
    
    updatecount(specificItem.id)
}

let addToTask = (id)=>{
     increment(id)
}

let decrement = (id)=>{
    let specificItem = id
    let findItem = basket.find((x)=>x.id===specificItem.id)
    if(findItem=== undefined)return
    else if(findItem.item=== 0)return

    else(findItem.item--)

    updatecount(specificItem.id)

   basket =  basket.filter((x)=> x.item !==0);
   console.log(basket)


    localStorage.setItem("DATA", JSON.stringify(basket))
    
    
    
}

function updatecount(id){
    let findItem = basket.find((x)=>x.id===id)
    let countId = document.getElementById(id)
    countId.innerText = findItem.item;
  
    cartCount()
}

let cartCount = ()=>{
 let mappedItem =   basket.map((x)=>x.item);
let total= mappedItem.reduce((x,y)=> x + y,0)
 
const cartCounter = document.getElementById("cart-counter");

cartCounter.textContent = total
 
}
cartCount()

// CART BASKET













