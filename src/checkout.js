const label = document.getElementById("label")
const shoppingCart = document.getElementById("shopping-cart")


let basket = JSON.parse(localStorage.getItem("DATA")) ||[];

let cartCount = ()=>{
    let mappedItem =   basket.map((x)=>x.item);
   let total= mappedItem.reduce((x,y)=> x + y,0)
    
   const cartCounter = document.getElementById("cart-counter");
   
   cartCounter.textContent = total
    
   }
   cartCount()

   let generateCartItems = ()=>{
    if(basket.length !==0){
      return  shoppingCart.innerHTML = basket.map((x)=>{

        const {id,item} = x
        let search = myItems.find ((y)=>y.id===id) ||[]
    
        return ` 
        <div class="cart-item">
          <img width= 100 src=${search.img} alt=""/>
          <div class ="details">
            <div class = "title-price-x">
                <h4>
                <p>${search.name}</p>
                <p>$ ${search.price}</p>

                </h4>
                <i class="fa-regular fa-x " onclick="removeItem(${id})"></i>
            </div>
            <div class ="cart-buttons">
            <i class="fa fa-minus" aria-hidden="true" onclick="decrement(${id})"></i>
            <p  id="${id}" class="item-count"> ${item}</p>
            <i class="fa fa-plus" aria-hidden="true" onclick="increment(${id})"></i>
        </div>
    </div>
            </div>
            <h3>$ ${item * search.price}</h3>

          </div>
            

        </div>
        
        
        `
      }).join('');
    }
    else{
        shoppingCart.innerHTML=``,
        label.innerHTML=`
         <h2>cart is empty</h2>
         <a href="v.html"> <button class="Homebtn">
         back to home </button><a/>       
         
         
         `
         console.log(label.innerHTML)
    }
   }
   generateCartItems()

   



  
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

    generateCartItems()
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
   generateCartItems()
   


    localStorage.setItem("DATA", JSON.stringify(basket))
    
    
    
}

function updatecount(id){
    let findItem = basket.find((x)=>x.id===id)
    let countId = document.getElementById(id)
    countId.innerText = findItem.item;
   
  
    cartCount()
    totalAmount()
}



let removeItem =(id) =>{
  
    let specificId = id
    basket = basket.filter((x)=>x.id !== specificId.id)
    generateCartItems()
    totalAmount()
    cartCount()
    localStorage.setItem("DATA", JSON.stringify(basket))
    
    

}

let clearCart = ()=>{
    basket = [];
    generateCartItems()
    cartCount()
    localStorage.setItem("DATA", JSON.stringify(basket))
}


let totalAmount = ()=>{
    if (basket.length !== 0){
        let amount = basket.map((x)=>{
            let {item, id} = x;
            let search = myItems.find((y)=>y.id===id) ||[]
            return item * search.price

        }).reduce((x,y)=>x+y,0);
       

        label.innerHTML= `
        <h2>Total Bil: $ ${amount}</h2>
        <button class="checkout">Checkout</button>
        <button class="removeAll" onclick="clearCart()">Clear Cart</button>
        
        `
        
    }else return;
}

totalAmount()
