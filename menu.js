// let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
// let url = `https://www.themealdb.com/api/json/v1/1/random.php`

async function getdishes(){
    try{
        let res = await fetch(url);

        let data = await res.json();
        dataArr = data.meals;
        appendData(dataArr)
        console.log(dataArr); 
    }
    catch(err){
        console.log(err);
    }
}
getdishes()

function appendData(data){
    data.forEach(function(data){

        let div = document.createElement("div");
        div.setAttribute("class", "images")

        let img = document.createElement("img");
        img.src = data.strMealThumb

        let name = document.createElement("h4");
        name.innerText = data.strMeal

        let price = document.createElement("p");
        price.innerHTML = `Rs. ${mathRandom(100,500)}`;

        let button = document.createElement("button");
        button.innerText = "Add to cart";
        button.addEventListener("click", function(){
            storetolocal(data)
        })

        div.append(img,name,price,button)



        document.querySelector(".dishes").append(div)



    })

}

function mathRandom(min,max){
    return Math.ceil(Math.random()*(max-min)+min)
}



// store data local
let arr = JSON.parse(localStorage.getItem("items")) || [];
function storetolocal(data){
    arr.push(data);
    localStorage.setItem("items" , JSON.stringify(arr));
}


// display cart items

function showNum(){
    let arr = JSON.parse(localStorage.getItem("items")) || [];

  
    let p = document.createElement("p");
    p.innerHTML = arr.length;
    console.log(p)
     
    let div = document.querySelector(".cartnum");

    div.append(p)

}


showNum()